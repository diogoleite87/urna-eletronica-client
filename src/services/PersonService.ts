import { Api } from "../providers";
import { Person } from "../schemas";

const getByCpf = (cpf: string) => Api.get<Person>(`/person/cpf?cpf=${cpf}`)

export const PersonService = {
    getByCpf
}