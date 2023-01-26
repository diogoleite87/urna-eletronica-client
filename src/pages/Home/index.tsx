import { useState } from "react";
import KeyBoard from "../../components/KeyBoard";
import { Container, ContainerKeyBoard, ContainerScreen, ScreeContent, Screen } from "./style";
import { redirect, useNavigate } from "react-router-dom";

export default function Home() {

    const [cpf, setCpf] = useState<string>("")

    const navigate = useNavigate()

    const submit = () => {
        navigate('/state')
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

            <ContainerKeyBoard>
                <KeyBoard state={cpf} setState={setCpf} submit={submit} />
            </ContainerKeyBoard>
        </Container>
    )
}