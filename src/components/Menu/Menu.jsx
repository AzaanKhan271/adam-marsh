import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { navData } from "../NavBar/NavBar";
import { themeColor } from "../../utils/constants/constants";
import { Button } from "@chakra-ui/react";
const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        {navData?.map((item, index) => {
          return (
            <li key={index}>
              <a
                onClick={() => {
                  setOpen(false);
                  document.body.style.overflow = "auto";
                }}
                href={item?.id}
              >
                {item?.name}
              </a>
            </li>
          );
        })}
        <li style={{ marginTop: "-5px" }}>
          <a
            onClick={() => {
              setOpen(false);
              document.body.style.overflow = "auto";
            }}
            target="_blank"
          >
            Ideas + Experiment
          </a>
        </li>
      </ul>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
