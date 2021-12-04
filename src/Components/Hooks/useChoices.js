import { useState } from "react";

const getChoices = choices => (!choices ? null : choices[0]);

export function useChoices(openItem) {

    const readyChoices = openItem.choice ? openItem.choice : getChoices(openItem.choices);

    const [choice, setChoice] = useState(readyChoices);

    function changeChoices(e) {
        setChoice(e.target.value);
    }

    return {choice, changeChoices};
}