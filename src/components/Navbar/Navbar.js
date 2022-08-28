import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles";
import { navbarData } from "../../data/NavBarData";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (id) => {
    scrollTo(id);

    setShow(false);
  };

  return (
    <IconContext.Provider>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavLogo src="./images.logo.svg" alt="logo">
              Designify
            </NavLogo>
            <MobileIcon onClick={() => setShow(!show)}>
              {show ? <FaTimes /> : <CgMenuRight />}
            </MobileIcon>
            {/* Mapping over all the arrays in the navbarData */}
            {/* It creates a new nav item */}
            <NavMenu show={show}>
              {navbarData.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks to="/" onClick={() => closeMobileMenu(el.to)}>
                    {el.text}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
