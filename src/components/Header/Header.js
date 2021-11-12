import React from "react";
import { BiWallet } from "react-icons/bi";
import styled from "styled-components";

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
  align-items: center;
  gap: 0.37em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <BiWallet /> Wiselink CryptoWallet ™
      </Logo>
    </StyledHeader>
  );
};

export default Header;
