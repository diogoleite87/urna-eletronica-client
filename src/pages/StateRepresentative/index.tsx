import { useEffect, useState } from "react";
import { BoxNumber, Container, ContainerImage, ContainerNumber, ContainerScreen, Gif, ImageCandidate, TextCondidateType, TextPart } from "./style";
import KeyBoard from "../../components/KeyBoard";
import { useNavigate } from "react-router-dom";
import { CandidateService } from "../../services/CandidateService";
import { Candidate } from "../../schemas";


export default function StateRepresentative() {

    const [number, setNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [part, setPart] = useState<string>("");
    const [candidate, setCandidate] = useState<Candidate>({} as Candidate);

    const navigate = useNavigate()

    const [audioInter, setAudioInter] = useState(new Audio('../../../assets/inter.mp3'))

    const submit = () => {
        audioInter.play()
        navigate('/senator')
    }

    useEffect(() => {

        if (number.length == 2) {

            CandidateService.getCandidateByNumber(number).then(res => {
                setCandidate(res.data)
                setName(res.data.name)
                setPart(res.data.partyNumber)
            }).catch(err => {
                console.log("Teste")
            })
        } else if (number.length == 0) {
            setName("")
            setPart("")
            setCandidate({} as Candidate)
        }
    }, [number])

    return (
        <Container>

            <ContainerScreen>
                <TextCondidateType>Deputado Estadual</TextCondidateType>
                <ContainerNumber>
                    <TextPart>Número: </TextPart>
                    <BoxNumber>{number[0]}</BoxNumber>
                    <BoxNumber>{number[1]}</BoxNumber>
                    <BoxNumber>{number[2]}</BoxNumber>
                    <BoxNumber>{number[3]}</BoxNumber>
                    <BoxNumber>{number[4]}</BoxNumber>
                </ContainerNumber>

                {name.length != 0 ? <TextPart>Nome: {name}</TextPart> : <></>}
                {part.length != 0 ? <TextPart>Partido: {part}</TextPart> : <></>}
            </ContainerScreen>
            <ContainerImage>
                {name.length != 0 ? <ImageCandidate src={candidate.picture} /> : <></>}
                {number.length == 0 ? <Gif src="../../../assets/depEstadual.gif" /> : <></>}
            </ContainerImage>
            <KeyBoard state={number} setState={setNumber} submit={submit} />
        </Container>
    )
}