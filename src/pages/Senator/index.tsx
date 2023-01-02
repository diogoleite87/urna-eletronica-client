import { useEffect, useState } from "react";
import { Container } from "./style";
import KeyBoard from "../../components/KeyBoard";
import InputCandidate from "../../components/InputCandidate";

let inputs = [
    { number: "" },
    { number: "" },
    { number: "" },
]

export default function Senator() {

    const [number, setNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [part, setPart] = useState<string>("");

    useEffect(() => {

        for (let index = 0; index < inputs.length; index++) {
            inputs[index].number = number[index]
        }

    }, [number])

    return (
        <Container>
            <InputCandidate candidateType={"Senador"} name={name} part={part} inputs={inputs} />
            <KeyBoard state={number} setState={setNumber} />
        </Container>
    )
}