import React from "react";

import Wallet from "../WalletContainer/WalletContainer";

import { AiOutlinePlus } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { createNewWallet } from "../../reducers/walletReducer";

import {
  WalletsGridContainer,
  FormNewWallet,
  WalletsGrid,
} from "./WalletGrid.elements";

const WalletGrid = () => {
  const wallets = useSelector((state) => state.wallets);
  const dispatch = useDispatch();

  const addWallet = (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target.name.value.trim();

    if (name.length) {
      target.name.value = "";
      dispatch(createNewWallet(name));
    }
  };

  return (
    <WalletsGridContainer>
      <FormNewWallet onSubmit={addWallet}>
        <label htmlFor="name">nombre de cartera</label>
        <input type="text" name="name" autoComplete="off" />
        <button>
          <AiOutlinePlus />
          Crear cartera
        </button>
      </FormNewWallet>
      <WalletsGrid className="Wallets">
        {wallets?.length > 0 &&
          wallets?.map((wallet) => (
            <Wallet key={wallet.id} id={wallet.id} name={wallet.name} />
          ))}
      </WalletsGrid>
    </WalletsGridContainer>
  );
};

export default WalletGrid;
