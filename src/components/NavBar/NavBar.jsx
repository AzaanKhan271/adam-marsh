import { Button } from "@chakra-ui/react";
import "./navBar.css";
import { themeColor } from "../../utils/constants/constants";
import { useRef, useState } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useOnClickOutside } from "../../utils/customHooks/customHooks";

export const navData = [
  { name: "Projects", id: "#" },
  { name: "About", id: "#" },
  { name: "Get In Touch", id: "#" },
];

const NavBar = ({ open, setOpen }) => {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <div className="navBarParent">
        {/* <Fade delay={500}> */}
        {/* <Fade delay={500}> */}

        {/* <Fade top delay={600}  cascade> */}
        <div className="logoDivParent">
          <a href="#home" className="logoDiv">
            <img
              className="navLogoImg"
              src="https://static.wixstatic.com/media/07836f_e648a279ea134c8091ff266ded8fcecf~mv2.png/v1/fill/w_448,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/07836f_e648a279ea134c8091ff266ded8fcecf~mv2.png"
              alt="logo"
            />
          </a>
          {/* </Fade> */}

          <ul className="linksParent">
            {navData?.map((item, index) => {
              return (
                <li key={index} className="linksContentDiv">
                  <a className="linksAnch" href={item?.id}>
                    {/* <span style={{ color: themeColor, marginRight: "5px" }}>
                      {`0${index + 1}.`}
                    </span> */}
                    {item?.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="burgerParent" ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>

        <div className="linksContentDiv" style={{ marginTop: "-5px" }}>
          <a target="_blank">
            <Button
              style={{ color: "#ffffff" }}
              className="resumeBtn"
              colorScheme={themeColor}
              variant="outline"
            >
              Ideas + Experiment
            </Button>
          </a>
        </div>
        {/* </Fade>         */}
      </div>
    </>
  );
};

export default NavBar;
