import { useNavigate } from "react-router-dom";
import { ButtonReceipt, ButtonRestart, Container, ContainerButton, Text } from "./style";
import { PDFService } from "../../services/PDFService";
import React from "react";
import axios from "axios";

export default function Final(): React.ReactElement {

    const navigate = useNavigate()

    const restart = () => {
        localStorage.clear()
        navigate('/')
    }

    const receipt = async () => {
        let cpfPerson = localStorage.getItem('urna-eletronica-cpf-person')

        window.open(`http://localhost:8000/api/pdf?cpf=${cpfPerson}`, "_blank");

    }

    return (
        <Container>
            <Text>FIM</Text>
            <ContainerButton>
                <ButtonRestart onClick={restart}>Reiniciar</ButtonRestart>
                <ButtonReceipt onClick={receipt}>Comprovante</ButtonReceipt>
            </ContainerButton>
        </Container>
    )
}