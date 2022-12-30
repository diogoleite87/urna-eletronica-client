import { useEffect, useState } from "react";
import { BoxNumber, Container, ContainerNumber, TextCondidateType, TextPart } from "./style";

interface IInputCandidate {
    candidateType: string,
    name: string,
    part: string,
    inputs: [{
        number: string
    }]
}

export default function InputCandidate({
    candidateType,
    name,
    part,
    inputs }: IInputCandidate) {

    return (

        <Container>
            <TextCondidateType>{candidateType}</TextCondidateType>
            <ContainerNumber>
                <TextPart>Número: </TextPart>
                {inputs.map((input) => <BoxNumber>{input.number}</BoxNumber>)}
            </ContainerNumber>

            {name.length != 0 ? <TextPart>Nome: {name}</TextPart> : <></>}
            {part.length != 0 ? <TextPart>Partido: {part}</TextPart> : <></>}
        </Container>
    )
}