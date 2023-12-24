// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  background: black;
  height: 100vh;
  text-align: left;
  padding-left: 20px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  width: 100%;
  padding-top: 100px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    color: #ffffff;
    padding: 10px 20px 10px 20px;
    font-size: 18px;
    letter-spacing: 1px;
  }

  ${
    "" /* a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => 'white'};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  } */
  }
`;
