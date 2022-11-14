import React from "react";
import { AboutWrapper, Content, ImageWrap } from "./AboutStyles";
import { Button } from "../../../../../styles/globalStyles";
import { Logo } from "../Navbar/NavbarStyles";
const About = () => {
  return (
    <AboutWrapper>
      <Content>
        <div>
          <Button>Welcome to my portfolio</Button>
        </div>
        <Logo>Hi my name is Mary Maina</Logo>
        <h2>I am a front-end Developer</h2>
        <div>I build intuitive web applications</div>
      </Content>
      <ImageWrap></ImageWrap>
    </AboutWrapper>
  );
};

export default About;
