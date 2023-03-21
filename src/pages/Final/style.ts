import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const Text = styled.p`
    font-size: 10em;
`

export const ContainerButton = styled.div`
    position: fixed;
    margin-bottom: 100px;
    bottom: 0;
`


export const ButtonRestart = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 8px;
    text-transform: uppercase;
    margin: 10px;
    background: #3FAF36;

    &:hover,
    &:focus {
        background: #338F2C;
    }
`

export const ButtonReceipt = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 8px;
    text-transform: uppercase;
    margin: 10px;
    background: #F72102;

    &:hover,
    &:focus {
        background: #D60210;
    }
`