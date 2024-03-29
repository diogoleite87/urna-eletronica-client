import { useEffect, useState } from "react";
import { BoxNumber, Container, ContainerImage, ContainerNumber, ContainerScreen, Gif, ImageCandidate, ImageSubstituteCandidate, NamePicture, NumberErro, TextCondidateType, TextPart } from "./style";
import KeyBoard from "../../components/KeyBoard";
import { useNavigate } from "react-router-dom";
import { CandidateService } from "../../services/CandidateService";
import { Candidate } from "../../schemas";
import { VoteService } from "../../services/VoteService";
import { sleep } from "../../utils/TimeSleep";


export default function Governor() {

    const [number, setNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [part, setPart] = useState<string>("");
    const [candidate, setCandidate] = useState<Candidate>({} as Candidate)
    const [numberError, setNumberError] = useState<boolean>(false)
    const [voteError, setVoteError] = useState<boolean>(false)

    const navigate = useNavigate()

    const [audioInter, setAudioInter] = useState(new Audio('../../../assets/inter.mp3'))

    const submit = async () => {

        let cpfPerson = localStorage.getItem('urna-eletronica-cpf-person')

        if (cpfPerson == null) {
            navigate('/')
        } else if (number.length == 2 && name.length != 0) {
            await VoteService.postVote({ cpf: cpfPerson, candidateNumber: parseInt(number) }).then(res => {
                audioInter.play()
                sleep(100)
                navigate('/president')
            }).catch(err => {
                setVoteError(true)
            })
        } else if (number.length == 2) {
            audioInter.play()
            sleep(100)
            navigate('/president')
        }
    }

    useEffect(() => {

        if (number.length == 2) {

            CandidateService.getCandidateByNumber(number).then(res => {
                setCandidate(res.data)
                setName(res.data.name)
                setPart(res.data.partyNumber)
            }).catch(err => {
                setNumberError(true)
            })
        } else if (number.length == 0) {
            setName("")
            setPart("")
            setCandidate({} as Candidate)
            setNumberError(false)
        }
    }, [number])


    return (
        <Container>

            <ContainerScreen>
                <TextCondidateType>Governador</TextCondidateType>
                <ContainerNumber>
                    <TextPart>Número: </TextPart>
                    <BoxNumber>{number[0]}</BoxNumber>
                    <BoxNumber>{number[1]}</BoxNumber>
                </ContainerNumber>
                {numberError ?
                    <>
                        <TextPart>NÚMERO ERRADO</TextPart>
                        <NumberErro>VOTO NULO</NumberErro>
                    </> : <></>}
                {name.length != 0 ? <TextPart>Nome: {name}</TextPart> : <></>}
                {part.length != 0 ? <TextPart>Partido: {part}</TextPart> : <></>}
                {name.length != 0 ? <TextPart>Vice-Governador: {candidate.substituteName}</TextPart> : <></>}
            </ContainerScreen>
            <ContainerImage>
                {name.length != 0 ? <>
                    <>
                        <ImageCandidate src={candidate.picture} />
                        <NamePicture>Governador</NamePicture>
                    </>
                    <ImageSubstituteCandidate src={candidate.substitutePicture} />
                    <NamePicture>Vice-Governador</NamePicture>
                </> : <></>}
                {number.length == 0 ? <Gif src="../../../assets/governador.gif" /> : <></>}
            </ContainerImage>
            <KeyBoard state={number} setState={setNumber} submit={submit} />
        </Container>
    )
}