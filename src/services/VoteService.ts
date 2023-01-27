import { Api } from "../providers";
import { VoteDTO } from "../schemas";

const postVote = (vote: VoteDTO) => Api.post(`/vote`, vote)

export const VoteService = {
    postVote
}
