import { useEffect, useState } from "react";
import { BoxNumber, Container, ContainerImage, ContainerNumber, ContainerScreen, Gif, ImageCandidate, NumberErro, TextCondidateType, TextPart } from "./style";
import KeyBoard from "../../components/KeyBoard";
import { useNavigate } from "react-router-dom";
import { CandidateService } from "../../services/CandidateService";
import { Candidate } from "../../schemas";
import { VoteService } from "../../services/VoteService";


export default function Congressman() {

    const [number, setNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [part, setPart] = useState<string>("");
    const [candidate, setCandidate] = useState<Candidate>({} as Candidate);
    const [numberError, setNumberError] = useState<boolean>(false)
    const [voteError, setVoteError] = useState<boolean>(false)

    const navigate = useNavigate()

    const [audioInter, setAudioInter] = useState(new Audio('../../../assets/inter.mp3'))

    const submit = async () => {

        let cpfPerson = localStorage.getItem('urna-eletronica-cpf-person')

        if (cpfPerson == null) {
            navigate('/')
        } else if (number.length == 4 && name.length != 0) {
            await VoteService.postVote({ cpf: cpfPerson, candidateNumber: parseInt(number) }).then(res => {
                audioInter.play()
                navigate('/state')
            }).catch(err => {
                setVoteError(true)
            })
        } else if (number.length == 4) {
            navigate('/state')
        }
    }

    useEffect(() => {

        if (number.length == 4) {

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
                <TextCondidateType>Deputado Federal</TextCondidateType>
                <ContainerNumber>
                    <TextPart>Número: </TextPart>
                    <BoxNumber>{number[0]}</BoxNumber>
                    <BoxNumber>{number[1]}</BoxNumber>
                    <BoxNumber>{number[2]}</BoxNumber>
                    <BoxNumber>{number[3]}</BoxNumber>
                </ContainerNumber>
                {numberError ?
                    <>
                        <TextPart>NÚMERO ERRADO</TextPart>
                        <NumberErro>VOTO NULO</NumberErro>
                    </> : <></>}
                {name.length != 0 ? <TextPart>Nome: {name}</TextPart> : <></>}
                {part.length != 0 ? <TextPart>Partido: {part}</TextPart> : <></>}
            </ContainerScreen>
            <ContainerImage>
                {name.length != 0 ? <ImageCandidate src={candidate.picture} /> : <></>}
                {number.length == 0 ? <Gif src="../../../assets/depFederal.gif" /> : <></>}
            </ContainerImage>
            <KeyBoard state={number} setState={setNumber} submit={submit} />
        </Container>
    )
}