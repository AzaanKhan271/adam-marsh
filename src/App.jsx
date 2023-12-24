import { useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import ClientsSection from "./components/ClientsSection/ClientsSection";

const App = () => {
  const [open, setOpen] = useState(false);
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName("navBarParent")[0].style.top = "0";
    } else {
      document.getElementsByClassName("navBarParent")[0].style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <ChakraProvider>
        <NavBar
          open={open}
          setOpen={(e) => {
            setOpen(e);
          }}
        />
        <VideoContainer />
        <ClientsSection />
      </ChakraProvider>
    </>
  );
};

export default App;
