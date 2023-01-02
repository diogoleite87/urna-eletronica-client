import { useState } from "react";
import KeyBoard from "../../components/KeyBoard";
import { Container, ContainerKeyBoard, ContainerScreen, ScreeContent, Screen } from "./style";

export default function Home() {

    const [cpf, setCpf] = useState<string>("")

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
                <KeyBoard state={cpf} setState={setCpf} />
            </ContainerKeyBoard>
        </Container>
    )
}