import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import { ContextItem } from "../Functions/contextItem";


const limitCount = item => {
  if (item < 1) return 1;
  else if (item > 100) return 100;
  else return item;
};


const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
`;

const ButtonCount = styled.button`
  background-color: transparent;
`;

export function CountItem() {

  const { counter: { count, setCount, onChange } } = useContext(ContextItem);

  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
        <CountInput type='number' min='1' max='100' value={limitCount(count)} onChange={onChange}/>
        <ButtonCount disabled={count >= 100} onClick={() => setCount(count +1)}>+</ButtonCount>
      </div>
    </CountWrapper>
  );
}
