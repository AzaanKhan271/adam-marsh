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
      <div style={{transform : open ? "rotate(45deg)" : "rotate(0)" , width : open ? "35px" : "40px"}} />
      <div style={{opacity: open ? "0" : "1",transform : open ? "translateX(20px)" : "translateX(0)" , width : open ? "40px" : "30px"}} />
      <div style={{transform : open ? "rotate(-45deg)" : "rotate(0)" , width : open ? "35px" : "20px"}}/>
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
