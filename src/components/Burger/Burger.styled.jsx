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
  border : 1px solid #ffffff;

  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    display: flex;
  }

  div {
    ${"" /* width: 2rem; */}
    height: 2px;
    background: ${({ theme, open }) =>
      open ? "rgb(100, 255, 218)" : "rgb(100, 255, 218)"};
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "35px" : "40px")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      width: ${({ open }) => (open ? "40px" : "30px")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "35px" : "20px")};
    }
  }
`;
