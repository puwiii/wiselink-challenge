import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router";
import Price from "../../Atoms/Price";
import NoData from "../../Atoms/NoData";

import { GrTransaction, GrFormNext } from "react-icons/gr";

import DocumentSVG from "../../svg/DocumentsSVG";
import CryptoWorldSVG from "../../svg/CryptoWorldSVG";

import {
  Title,
  Subtitle,
  SpinnerContainer,
  WalletPage,
  Header,
  Balance,
  NewTransaction,
  Assets,
  AssetItem,
  AssetInfo,
  AssetAmount,
  WalletMain,
  WalletAside,
  CloseAside,
  Transactions,
} from "./Wallet.elements";
import Cryptocurrency from "../../Cryptocurrency/Cryptocurrency";
import axios from "axios";
import { requests } from "../../../requests";
import AddTransactionForm from "../../AddTransactionForm/AddTransactionForm";
import Transaction from "../../Transaction/Transaction";

const Wallet = () => {
  const { id } = useParams();

  const [wallet, setWallet] = useState(undefined);
  const [transactions, setTransactions] = useState(undefined);
  const [balance, setBalance] = useState(0);
  const [assets, setAssets] = useState(undefined);
  const [showTransaction, setShowTransaction] = useState(false);

  const wallets = useSelector((state) => state.wallets);
  const transactionsState = useSelector((state) => state.transactions);

  useEffect(() => {
    if (wallets) {
      const findedWallet = wallets.find((wallet) => wallet.id === id);
      findedWallet ? setWallet(findedWallet) : setWallet(null);

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
          setAssets(response);
          let balanceAcum = 0;

          response.forEach((asset) => {
            balanceAcum += asset.amount * asset.current_price;
          });

          setBalance(balanceAcum);
        });
      }
    } else {
      setWallet(null);
    }
  }, [id, wallets]);

  useEffect(() => {
    if (transactionsState && wallet) {
      setTransactions(
        transactionsState.filter(
          (transactions) => transactions.walletId === wallet.id
        )
      );
    }
  }, [transactionsState, wallet]);

  return (
    <WalletPage>
      {wallet ? (
        <>
          <WalletMain>
            <Header>
              <Title>
                <span>nombre de cartera </span>
                {wallet.name}
              </Title>
              <Balance>
                Saldo: <Price price={balance} />
              </Balance>
              <NewTransaction
                onClick={(e) => {
                  e.preventDefault();
                  setShowTransaction(true);
                }}
              >
                <GrTransaction />
                Realizar Transferencia
              </NewTransaction>
            </Header>

            <Subtitle>Activos</Subtitle>
            {assets?.length === 0 && (
              <NoData>
                <CryptoWorldSVG width={150} />
                No tienes ningun activo
              </NoData>
            )}
            <Assets>
              {assets ? (
                assets.map((asset) => (
                  <AssetItem key={asset.id}>
                    <Cryptocurrency
                      id={asset.id}
                      name={asset.name}
                      symbol={asset.symbol}
                      price={asset.current_price}
                      image={asset.image}
                      isDecorative={true}
                    />
                    <AssetInfo>
                      <AssetAmount>
                        <span>Cantidad</span>
                        {asset.amount}
                      </AssetAmount>
                      <Price price={asset.amount * asset.current_price} />
                    </AssetInfo>
                  </AssetItem>
                ))
              ) : (
                <span>cargando monedas</span>
              )}
            </Assets>

            <Transactions>
              <Subtitle>Transacciones</Subtitle>
              {transactions?.length === 0 && (
                <NoData>
                  <DocumentSVG width={150} />
                  No existe ninguna transferencia
                </NoData>
              )}
              {transactions?.map((transaction) => (
                <Transaction
                  key={transaction.id}
                  id={transaction.id}
                  coin={transaction.coin}
                  amount={transaction.amount}
                  price={transaction.price}
                  date={transaction.date}
                  type={transaction.type}
                />
              ))}
            </Transactions>
          </WalletMain>
          <WalletAside show={showTransaction}>
            <CloseAside onClick={() => setShowTransaction(false)}>
              <GrFormNext />
            </CloseAside>
            <AddTransactionForm idWallet={wallet.id} coinsToSell={assets} />
          </WalletAside>
        </>
      ) : wallet === undefined ? (
        <SpinnerContainer>Cargando...</SpinnerContainer>
      ) : (
        <Title>Wallet no encontrada</Title>
      )}
    </WalletPage>
  );
};

export default Wallet;
