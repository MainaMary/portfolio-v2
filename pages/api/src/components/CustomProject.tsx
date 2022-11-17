import React from "react";
import styled from "styled-components";
import { DefaultButton } from "../../../../styles/globalStyles";
import Image from "next/image";
interface Props {
  title: string;
  content: string;
  demoLink: string;
  githubLink: string;
  image: any;
}

import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { ImageWrap } from "../pages/Home/HomeStyles";
const CustomProject = (props: Props) => {
  const { title, content, demoLink, githubLink, image } = props;
  return (
    <Wrapper>
      <Grid>
        <About>
          <h2>{title}</h2>
          <div>
            <p>{content}</p>
          </div>

          <Box>
            <DefaultButton primary>
              <ProjectLink href={demoLink}>
                <BsArrowUpRightCircleFill />
                Live site
              </ProjectLink>
            </DefaultButton>
            <DefaultButton>
              <ProjectLink href={githubLink} target="_blank">
                <AiFillGithub />
                Github
              </ProjectLink>
            </DefaultButton>
          </Box>
        </About>
        <ImageWrap>
          <Image src={image} width={600} height={400} alt="profile" />
        </ImageWrap>
      </Grid>
    </Wrapper>
  );
};

export default CustomProject;
const Wrapper = styled.div``;
const Grid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;
const About = styled.div``;
const ImageWrp = styled.div``;
const Box = styled.div``;
const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #e91e63;
`;
