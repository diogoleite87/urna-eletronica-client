import { useState } from "react";
import KeyBoard from "../../components/KeyBoard";
import { Container, ContainerKeyBoard, ContainerScreen, MsgError, ScreeContent, Screen } from "./style";
import { redirect, useNavigate } from "react-router-dom";
import { PersonService } from "../../services/PersonService";
import { Person } from "../../schemas";

export default function Home() {

    const [cpf, setCpf] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [msgError, setMsgError] = useState<string>();

    const navigate = useNavigate()

    const submit = async () => {

        await PersonService.getByCpf(cpf).then(res => {

            if (res.data.hasVoted == false) {
                localStorage.setItem('urna-eletronica-cpf-person', cpf)
                navigate('/congressman')
            } else {
                setMsgError("Eleitor com votos ja contabilizados.")
                setError(true)
            }
        }).catch(err => {
            setMsgError("Eleitor inválido")
            setError(true)
        })
    }

    return (
        <Container>
            <ContainerScreen>
                <Screen>
                    <ScreeContent>
                        {cpf}
                    </ScreeContent>
                </Screen>
            </ContainerScreen>

            {error ? <MsgError>{msgError}</MsgError> : <></>}

            <ContainerKeyBoard>
                <KeyBoard state={cpf} setState={setCpf} submit={submit} />
            </ContainerKeyBoard>
        </Container>
    )
}