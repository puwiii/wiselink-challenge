import { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../../requests";
import { useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import {
  WalletContainer,
  WalletName,
  WalletRemove,
  WalletBalance,
  Asset,
  AssetAmount,
  AssetImage,
  AssetName,
  Assets,
} from "./WalletContainer.elements";
import Price from "../Atoms/Price";
import { useDispatch } from "react-redux";
import { removeWallet } from "../../reducers/walletReducer";

const Wallet = ({ id, name }) => {
  const [balance, setBalance] = useState(0);

  const [wallet, setWallet] = useState(null);

  const wallets = useSelector((state) => state.wallets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (wallets) {
      const findedWallet = wallets.find((wallet) => wallet.id === id);
      setWallet(findedWallet);
      //finding assets values from API

      if (findedWallet) {
        const assetsDetails = findedWallet.assets.map((asset) => {
          return axios
            .get(`${requests.getSimplePrice}${asset.id}`)
            .then((response) => {
              const current_price = response.data[asset.id].usd;
              return { ...asset, current_price };
            });
        });

        Promise.all(assetsDetails).then((response) => {
          let balanceAcum = 0;

          response.forEach((asset) => {
            balanceAcum += asset.amount * asset.current_price;
          });

          setBalance(balanceAcum);
        });
      }
    }
  }, [id, wallets]);

  const remove = (e) => {
    // e.stopPropagation();
    // console.log(e);
    e.preventDefault();
    dispatch(removeWallet(id));
    // alert("algo");
  };

  return (
    <WalletContainer to={`wallet/${id}`}>
      <WalletName>{name}</WalletName>
      <WalletBalance>
        <Price price={balance} />
      </WalletBalance>
      <Assets>
        {wallet?.assets.map((asset) => (
          <Asset key={asset.id} title={asset.name}>
            <AssetImage src={asset.image} alt={asset.name} />
            {/* <AssetName>{asset.name}</AssetName> */}
            <AssetAmount>{asset.amount}u</AssetAmount>
          </Asset>
        ))}
      </Assets>
      <WalletRemove onClick={remove}>
        <AiOutlineDelete /> Borrar cartera
      </WalletRemove>
    </WalletContainer>
  );
};

export default Wallet;
