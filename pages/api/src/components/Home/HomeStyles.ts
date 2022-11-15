import styled from "styled-components";
export const AboutWrapper = styled.div`
  display: flex;
  padding: 80px 0;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const ImageWrap = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  width: 50%;
  margin-top: 40px;
  padding-right: 120px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;
export const Contact = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const AboutContent = styled.div``;
