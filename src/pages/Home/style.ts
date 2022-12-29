import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const ContainerScreen = styled.div`
    display: flex;
    margin-top: 3vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    background: #515151;
`

export const ContainerKeyBoard = styled.div`
    margin-bottom: 3vh;
`

export const Screen = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    gap: 10px;
    overflow: hidden;
    width: 95%;
    height: 80%;

    background: #44743C;
`

export const ScreeContent = styled.p`
    width: 363px;
    height: 77px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    text-align: end;

    color: #FFFFFF;
`