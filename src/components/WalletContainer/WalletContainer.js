import React from "react";

import {
  WalletContainer,
  WalletName,
  WalletId,
} from "./WalletContainer.elements";

const Wallet = ({ id, name }) => {
  return (
    <WalletContainer to={`wallet/${id}`}>
      <WalletName>{name}</WalletName>
      <WalletId>{id}</WalletId>
    </WalletContainer>
  );
};

export default Wallet;
