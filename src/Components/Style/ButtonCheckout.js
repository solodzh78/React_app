import styled from "styled-components";

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  background-color: #299B01;
  border-color: transparent;
  font-family: inherit;
  font-size: inherit;
  color: white;
  padding: 0;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: white;
    border-color: #299B01;
    color: #299B01;
  }
`;