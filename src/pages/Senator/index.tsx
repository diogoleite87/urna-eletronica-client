import { useEffect, useState } from "react";
import { BoxNumber, Container, ContainerImage, ContainerNumber, ContainerScreen, Gif, ImageCandidate, TextCondidateType, TextPart } from "./style";
import KeyBoard from "../../components/KeyBoard";
import { useNavigate } from "react-router-dom";

export default function Senator() {

    const [number, setNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [part, setPart] = useState<string>("");

    const navigate = useNavigate()

    const [audioInter, setAudioInter] = useState(new Audio('../../../assets/inter.mp3'))

    const submit = () => {
        audioInter.play()
        navigate('/governor')
    }

    return (
        <Container>

            <ContainerScreen>
                <TextCondidateType>Senador</TextCondidateType>
                <ContainerNumber>
                    <TextPart>Número: </TextPart>
                    <BoxNumber>{number[0]}</BoxNumber>
                    <BoxNumber>{number[1]}</BoxNumber>
                    <BoxNumber>{number[3]}</BoxNumber>
                </ContainerNumber>

                {name.length != 0 ? <TextPart>Nome: {name}</TextPart> : <></>}
                {part.length != 0 ? <TextPart>Partido: {part}</TextPart> : <></>}
            </ContainerScreen>
            <ContainerImage>
                {name.length != 0 ? <ImageCandidate /> : <></>}
                {number.length == 0 ? <Gif src="../../../assets/senador.gif" /> : <></>}
            </ContainerImage>
            <KeyBoard state={number} setState={setNumber} submit={submit} />
        </Container>
    )
}