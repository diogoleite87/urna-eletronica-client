import { Api } from "../providers";
import { Candidate } from "../schemas";

const getCandidateByNumber = (number: string) => Api.get<Candidate>(`/candidate/number?candidateNumber=${number}`)

export const CandidateService = {
    getCandidateByNumber
}