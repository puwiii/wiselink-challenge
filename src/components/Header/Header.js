import React from "react";
import { BiHome } from "react-icons/bi";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { GiBackboneShell } from "react-icons/gi";
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";

const StyledHeader = styled.header`
  background: #285177;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 70px;
  padding: 0 2em;
`;

const Logo = styled.h1`
  font-size: 1.4rem;
  color: #fff;
  display: flex;
  align-items: stretch;
  gap: 0.37em;
  font-weight: 400;
`;

const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  margin-left: auto;
  color: #fff;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.1);
    color: #121212;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    background: #fff;
  }
`;

const StyledNavLink = styled(Link)`
  font-family: "Lato";
  font-size: 0.9rem;
  padding: 0em 1.2em;
  display: flex;
  align-items: center;
  gap: 0.37em;
  opacity: 0.9;
  font-weight: 600;
  transition: border-bottom 125ms linear, opacity 125ms ease-in-out;
  border-bottom: 2px solid transparent;
  opacity: 0.4;

  &:hover {
    opacity: 1;
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 0.67rem;
  }

  & > svg {
    font-size: 1.1rem;
  }
`;

const StyledLink = styled.a`
  font-family: "Lato";
  font-size: 0.9rem;
  padding: 1em 1.2em;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.37em;
  opacity: 0.9;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  opacity: 0.4;
  transition: border-bottom 125ms linear, opacity 125ms ease-in-out;
  &:hover {
    opacity: 1;
    border-bottom: 2px solid #fff;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 0.67rem;
  }

  & > svg {
    font-size: 1.1rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <GiBackboneShell /> Wiselink CryptoWallet ™
      </Logo>
      <Nav>
        <StyledNavLink to="/">
          <BiHome />
          Inicio
        </StyledNavLink>
        <StyledLink
          href="https://github.com/puwiii/wiselink-challenge"
          target="_blank"
        >
          <AiFillGithub />
          Código
        </StyledLink>
        <StyledLink href="https://www.sebastianmathieur.com/" target="_blank">
          <AiOutlineUser />
          Acerca de mí
        </StyledLink>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
