import React, { useEffect, useState } from "react";
import { AboutWrapper, Content, ImageWrap, Contact } from "./HomeStyles";
import {
  Button,
  DefaultButton,
  Text,
} from "../../../../../styles/globalStyles";
import { Logo } from "../Navbar/NavbarStyles";
import Image from "next/image";
import Profile from "../../../../../public/assets/userProfile.svg";

const HomePage = () => {
  const [loopNum, setLoopName] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const arrList = ["Frontend developer", "Web designer", "Community organizer"];
  const [text, setText] = useState<string>("");
  const timer = 1000;
  return (
    <AboutWrapper id="home">
      <Content>
        <div>
          <Button>Welcome to my portfolio</Button>
        </div>
        <h1>
          Hi, my name is <span>Mary Maina</span>
        </h1>
        <h2>I am a front-end Developer</h2>
        <Text>
          I am a professional frontend developer passionate about building
          intuitive, scalable and effecient web applications.
        </Text>
        <Contact>
          <DefaultButton primary>Resume</DefaultButton>
          <DefaultButton>Contact me</DefaultButton>
        </Contact>
      </Content>
      <ImageWrap>
        <Image src={Profile} width={1000} height={400} alt="profile" />
      </ImageWrap>
    </AboutWrapper>
  );
};

export default HomePage;
