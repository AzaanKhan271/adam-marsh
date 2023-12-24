// Burger.js
import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        if (open) {
          document.body.style.overflow = "auto";
        } else {
          document.body.style.overflow = "hidden";
        }
        setOpen(!open);
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
