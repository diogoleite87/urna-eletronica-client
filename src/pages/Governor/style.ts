import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 3vh;
`

export const ContainerScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    width: 785px;
    height: 482px;
    left: 88px;
    top: 299px;
`

export const ContainerNumber = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    width: 749px;
    height: 157px;
`

export const BoxNumber = styled.p`
    width: 70%;
    height: 70%;
    border: 3px solid #565656;
    font-size: 5em;
    text-align: center;
`

export const TextPart = styled.div`
    font-size: 2.5em;
    width: 100%;
`

export const TextCondidateType = styled.div`
    display: flex;
    align-items: center;
    tet-align: center;
    justify-content: center;
    font-size: 3em;
    width: 100%;
`
export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 3vh;
`

export const ImageCandidate = styled.img`
    max-width: 300px;
    max-height: 250px;
`

export const ImageSubstituteCandidate = styled.img`
    margin-top: 20px;
    max-width: 300px;
    max-height: 250px;
`

export const Gif = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NamePicture = styled.p`
    font-size: 25px;
`

export const NumberErro = styled.p`
    display: flex;
    margin-top: 20px;
    font-size: 5em;
    text-align: center;
`