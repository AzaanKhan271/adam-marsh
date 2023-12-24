// Burger.styled.js
import styled from "styled-components";
export const StyledBurger = styled.button`
  position: absolute;
  top: 30px;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    display: flex;
  }

  div {
    height: 2px;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
