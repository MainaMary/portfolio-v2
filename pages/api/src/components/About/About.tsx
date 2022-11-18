import React from "react";
import {
  AboutWrapper,
  AboutContent,
  Skills,
  SkillsWrapper,
} from "./AboutStyles";
import { RoundedButton, Text } from "../../../../../styles/globalStyles";
import Title from "../Title";
import Link from "next/link";
const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutContent>
        <Title>About</Title>
        <Text>
          I am passionate about problem solving using technology and it's
          endless capabilities. I specialize in building exceptional digital
          experiences and intuitive web applications.. My primary focus is
          frontend development using React,Typescript and Nextjs to create
          intuitive user interfaces on the client side. Currently learning
          backend technolgies using NodeJS and MongoDB.
        </Text>
        <Link href="https://medium.com/@wanjikumary" target="_blank">
          Check out my latest articles
        </Link>
      </AboutContent>
      <Skills>
        <Title>Skills</Title>
        <SkillsWrapper>
          <RoundedButton>Website development</RoundedButton>
          <RoundedButton>Responsive web design</RoundedButton>
          <RoundedButton>Progressive web application</RoundedButton>
          <RoundedButton>Building REST APIs</RoundedButton>
          <RoundedButton>Firebase intergration</RoundedButton>
          <RoundedButton>Technical writing</RoundedButton>
        </SkillsWrapper>
      </Skills>
    </AboutWrapper>
  );
};

export default About;
