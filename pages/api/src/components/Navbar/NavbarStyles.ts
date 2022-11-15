import styled from "styled-components";
import Link from "next/link";
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 100;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
  padding: 0 32px;
  //position: fixed;
  width: calc(100% - 64px);
`;
export const Logo = styled.h2`
  color: #e91e63;
  font-size: 32px;
  font-weight: 700;
`;
export const MenuItems = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-between;
  list-style-type: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkTag = styled(Link)`
  text-underline: none;
  text-decoration: none;
  color: gray;
`;
export const ListItems = styled.li`
  font-size: 14px;
  line-height: 1.25rem;
  text-transform: uppercase;
  font-weight: 500;
  list-style: none;
  @media screen and (max-width: 768px) {
    padding: 16px 0;
  }
`;
export const MenuWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
  z-index: 100;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Sidebar = styled.div`
  background-color: #ecf0f3;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  transition: ease-in-duration-400;
  padding: 0px 26px;
  width: 60%;
  width: calc(60% - 52px);
  z-index: 100;
  transition: 0.8s all ease;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 329px and max-width: 500px) {
    width: 50%;
  }
  @media screen and (max-width: 328px) {
    display: block;
    width: 70%;
    padding: 12px 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  align-items: center;
`;
export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #grey;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: #e91e63;
  &:hover: {
    transform: scale(1);
  }
`;
export const Socials = styled.div`
  margin-top: 100px;
`;
