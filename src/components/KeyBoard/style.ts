import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    background: #515151;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 11px;
    width: 324px;
    height: 100%;

    background: #515151;

`

export const Button = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;

    width: 25%;
    height: 50%;

    background: #272727;

`
export const RowAcctions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
    gap: 11px;

    width: 80%;
    height: 143px;

    background: #515151;
`

export const ButtonWhite = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 30%;
    height: 40%;

    background: #FFFFFF;
`

export const ButtonCorrect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 30%;
    height: 40%;

    background: #DC6B03;
`

export const ButtonConfirm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 40%;
    height: 50%;

    background: #3FAF36;
`

export const TextButtonAcctions = styled.p`
    color: #000;
    font-size: 1.2em;
`

export const NumberButton = styled.p`
    color: #fff;
    font-size: 2em;
`