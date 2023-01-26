import { useState } from "react";
import { Button, ButtonConfirm, ButtonCorrect, ButtonWhite, Container, Row, RowAcctions, NumberButton, TextButtonAcctions } from "./style";

interface IKeyBoard {
    state: string
    setState(state: string): void
    submit(): void
}

export default function KeyBoard({ state, setState, submit }: IKeyBoard) {

    const buttonClick = (value: string) => {
        setState(state + value)
    }

    return (
        <Container>
            <Row>
                <Button onClick={() => buttonClick("1")}><NumberButton>1</NumberButton></Button>
                <Button onClick={() => buttonClick("2")}><NumberButton>2</NumberButton></Button>
                <Button onClick={() => buttonClick("3")}><NumberButton>3</NumberButton></Button>
            </Row>
            <Row>
                <Button onClick={() => buttonClick("4")}><NumberButton>4</NumberButton></Button>
                <Button onClick={() => buttonClick("5")}><NumberButton>5</NumberButton></Button>
                <Button onClick={() => buttonClick("6")}><NumberButton>6</NumberButton></Button>
            </Row>
            <Row>
                <Button onClick={() => buttonClick("7")}><NumberButton>7</NumberButton></Button>
                <Button onClick={() => buttonClick("8")}><NumberButton>8</NumberButton></Button>
                <Button onClick={() => buttonClick("9")}><NumberButton>9</NumberButton></Button>
            </Row>
            <Row>
                <Button onClick={() => buttonClick("0")}><NumberButton>0</NumberButton></Button>
            </Row>
            <RowAcctions>
                <ButtonWhite><TextButtonAcctions>BRANCO</TextButtonAcctions></ButtonWhite>
                <ButtonCorrect onClick={() => setState("")}><TextButtonAcctions>CORRIGE</TextButtonAcctions></ButtonCorrect>
                <ButtonConfirm onClick={submit}><TextButtonAcctions>CONFIRMA</TextButtonAcctions></ButtonConfirm>
            </RowAcctions>
        </Container>
    )
}