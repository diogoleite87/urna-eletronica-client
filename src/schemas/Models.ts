export type Candidate = {
    number: string,
    uf: string,
    picture: string,
    name: string,
    substituteName: string,
    substitutePicture: string,
    partyNumber: string
}

export type Person = {
    cpf: string,
    name: string,
    picture: string,
    uf: string,
    hasVoted: boolean
}