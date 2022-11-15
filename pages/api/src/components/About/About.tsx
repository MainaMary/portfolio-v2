import React from "react";
import { AboutWrapper, AboutContent, Skills, Wrap } from "../About/AboutStyles";
import Title from "../Title";
const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <Title>About</Title>
        <div>
          I am passionate about problem solving using technology and it's
          endless capabilities. I specialize in building exceptional digital
          experiences and intuitive web applications.. My primary focus is
          frontend development using React,Typescript and Nextjs to create
          intuitive user interfaces on the client side. Currently learning
          backend technolgies using NodeJS and MongoDB.
        </div>
      </AboutContent>
      <Skills>
        <Title>Skills</Title>
        <Wrap>Website development</Wrap>
        <Wrap>Responsive web design</Wrap>
        <Wrap>Building REST APIs</Wrap>
        <Wrap>Firebase</Wrap>

        <Wrap></Wrap>
      </Skills>
    </AboutWrapper>
  );
};

export default About;
