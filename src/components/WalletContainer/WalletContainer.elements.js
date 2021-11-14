import styled from "styled-components";
import { Link } from "react-router-dom";

export const WalletContainer = styled(Link)`
  position: relative;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
  border-radius: 4px;
  box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const WalletName = styled.h3``;

export const WalletRemove = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.67em;
  font-weight: 600;
  background: transparent;
  font-size: 0.67rem;
  color: #cc5555;

  & > svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: #cc555511;
  }
`;

export const WalletBalance = styled.div``;

export const Assets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.67em;
  justify-content: space-around;
  width: 100%;
`;

export const Asset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.37em;
  font-size: 0.87rem;
  font-weight: 600;
  color: #bbb;
`;
export const AssetAmount = styled.div``;
export const AssetImage = styled.img`
  width: 30px;
  height: 30px;
`;
export const AssetName = styled.div``;
