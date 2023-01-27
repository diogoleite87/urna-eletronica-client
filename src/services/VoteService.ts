import { Api } from "../providers";
import { PersonVotedDTO, VoteDTO } from "../schemas";

const postVote = (vote: VoteDTO) => Api.post(`/vote`, vote)
const hasVoted = (hasVoted: PersonVotedDTO, cpf: string) => Api.put(`person?cpf=${cpf}`)

export const VoteService = {
    postVote,
    hasVoted
}
