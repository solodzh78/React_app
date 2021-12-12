import { useContext } from "react";
import styled from "styled-components";
import { ContextItem } from "../Functions/contextItem";

const ChoiceWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count:2;
  column-gap: 15px;
`;

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  display: block;
`;

export function Choices() {

  const { choices: { choice, changeChoices }, openItem } = useContext(ContextItem);

  return(
    <>
      <h3>Выбирайте:</h3>
      <ChoiceWrap>
        {openItem.choices.map((item, i) => (
          <ChoiceLabel key={i}>
            <ChoiceRadio 
              type="radio" 
              name="choices"
              value={item}
              checked={choice === item} 
              onChange={changeChoices}/>
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  );
}