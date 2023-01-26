import { useEffect, useState } from "react";
import { BoxNumber, Container, ContainerImage, ContainerNumber, ContainerScreen, Gif, ImageCandidate, TextCondidateType, TextPart } from "./style";
import KeyBoard from "../../components/KeyBoard";

export default function President() {

    const [number, setNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [part, setPart] = useState<string>("");

    const [audioEnd, setAudioEnd] = useState(new Audio('../../../assets/fim.mp3'))

    const submit = () => {
        audioEnd.play()
    }

    return (
        <Container>

            <ContainerScreen>
                <TextCondidateType>Presidente</TextCondidateType>
                <ContainerNumber>
                    <TextPart>Número: </TextPart>
                    <BoxNumber>{number[0]}</BoxNumber>
                    <BoxNumber>{number[1]}</BoxNumber>
                </ContainerNumber>

                {name.length != 0 ? <TextPart>Nome: {name}</TextPart> : <></>}
                {part.length != 0 ? <TextPart>Partido: {part}</TextPart> : <></>}
            </ContainerScreen>
            <ContainerImage>
                {name.length != 0 ? <ImageCandidate /> : <></>}
                {number.length == 0 ? <Gif src="../../../assets/presidente.gif" /> : <></>}
            </ContainerImage>
            <KeyBoard state={number} setState={setNumber} submit={submit} />
        </Container>
    )
}