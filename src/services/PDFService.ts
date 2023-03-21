import { Api } from "../providers";

const getVoteReport = async (cpf: string) => Api.get<any>(`pdf?cpf=${cpf}`)

export const PDFService = {
    getVoteReport
}