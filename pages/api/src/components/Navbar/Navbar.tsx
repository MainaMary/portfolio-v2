import React, { useState, useEffect, useRef } from "react";
import {
  Nav,
  MenuItems,
  ListItems,
  LinkTag,
  MenuWrapper,
  Overlay,
  Sidebar,
  Box,
  IconWrapper,
  IconsContainer,
  Logo,
  Socials,
} from "./NavbarStyles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMedium,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const iconRef = useRef(null);
  const menuLinks = [
    { id: 1, item: "Home", path: "/#home" },
    { id: 2, item: "About", path: "/#about" },
    { id: 3, item: "Projects", path: "/#projects" },
    { id: 5, item: "Contact", path: "/#contact" },
  ];
  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const handleShadow = () => {
    if (window.scrollY > 80) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleShadow);
  }, []);
  const style = { fontSize: "20px", fontWeight: 500 };
  // useEffect(() => {
  //   if (hover) {
  //     iconRef.current.style.fontSize = "200%";
  //   } else {
  //     iconRef.current.style.fontSize = "180%";
  //   }
  // }, [hover]);

  return (
    <Nav shadow={shadow}>
      <Logo>Logo</Logo>

      <MenuItems>
        {menuLinks.map((item) => (
          <LinkTag key={item.id} href={item.path}>
            <ListItems> {item.item}</ListItems>
          </LinkTag>
        ))}
      </MenuItems>

      <MenuWrapper onClick={handleMenu}>
        <FaBars
          style={style}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        />
      </MenuWrapper>
      {openMenu && (
        <Overlay>
          <Sidebar>
            <Box>
              <Logo>Logo</Logo>
              <Box onClick={handleMenu}>
                <FaTimes />
              </Box>
            </Box>
            <div>
              <p>Let's build together!!</p>
            </div>
            <div>
              {menuLinks.map((item) => (
                <LinkTag key={item.id} href={item.path}>
                  <ListItems> {item.item}</ListItems>
                </LinkTag>
              ))}
            </div>
            <Socials>
              <p>Follow me on my socials</p>
              <IconsContainer>
                <IconWrapper>
                  <AiFillLinkedin />
                </IconWrapper>
                <IconWrapper>
                  <AiFillGithub />
                </IconWrapper>
                <IconWrapper>
                  <AiFillTwitterCircle />
                </IconWrapper>
                <IconWrapper>
                  <AiOutlineMedium />
                </IconWrapper>
              </IconsContainer>
            </Socials>
          </Sidebar>
        </Overlay>
      )}
    </Nav>
  );
};

export default Navbar;
