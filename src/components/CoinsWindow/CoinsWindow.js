import React, { useRef, useState, useEffect } from "react";
import { requests } from "../../requests";
import axios from "axios";
import Cryptocurrency from "../Cryptocurrency/Cryptocurrency";
import NoData from "../Atoms/NoData";
import CryptoFlowerSVG from "../svg/CryptoFlowerSVG";
import {
  WindowContainer,
  CoinsWindowContainer,
  Title,
  Message,
  CoinsContainer,
  Pagination,
  ItemPagination,
} from "./CoinsWindow.elements";

import Spinner from "../Spinner";

const CoinsWindow = ({ closeWindow, setCoinToOperate, coinsToSell }) => {
  const [pagination, setPagination] = useState(1);
  const [coins, setCoins] = useState(undefined);
  const outerContainerRef = useRef(null);

  const [message, setMessage] = useState("Cargando...");

  useEffect(() => {
    if (coinsToSell) {
      setCoins(undefined);
      const newCoins = coinsToSell.map((coin) => {
        return axios
          .get(`${requests.getSimplePrice}${coin.id}`)
          .then((response) => {
            const responsePrice = response.data[coin.id].usd;
            return { ...coin, current_price: responsePrice };
          });
      });

      Promise.all(newCoins).then((response) => {
        setCoins(response);
      });
    } else {
      setCoins(undefined);
      axios
        .get(`${requests.getCoinsMarket}&page=${pagination}`)
        .then((response) => {
          setCoins(response.data);
        })
        .catch((error) => {
          setMessage(error.message);
        });
    }
  }, [pagination, coinsToSell]);

  const checkClickOutside = (e) => {
    e.target === outerContainerRef.current && closeWindow();
  };

  return (
    <WindowContainer ref={outerContainerRef} onClick={checkClickOutside}>
      <CoinsWindowContainer>
        <Title>Cryptos disponibles</Title>
        {coins?.length === 0 && (
          <NoData>
            <CryptoFlowerSVG width={150} />
            No hay coins disponibles
          </NoData>
        )}
        {coins ? (
          <>
            <CoinsContainer>
              {coins?.map((coin) => (
                <Cryptocurrency
                  key={coin.id}
                  name={coin.name}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  image={coin.image}
                  onClick={() => {
                    setCoinToOperate(coin);
                    closeWindow();
                  }}
                />
              ))}
            </CoinsContainer>

            {!coinsToSell && (
              <Pagination>
                {pagination > 2 && (
                  <>
                    <ItemPagination
                      onClick={(e) => {
                        e.preventDefault();
                        setPagination(1);
                      }}
                    >
                      1
                    </ItemPagination>
                    <span>...</span>
                  </>
                )}
                {pagination - 1 > 0 && (
                  <ItemPagination
                    onClick={(e) => {
                      e.preventDefault();
                      setPagination((prevPag) => prevPag - 1);
                    }}
                  >
                    {pagination - 1}
                  </ItemPagination>
                )}
                <ItemPagination
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  isActive={true}
                >
                  {pagination}
                </ItemPagination>
                <ItemPagination
                  onClick={(e) => {
                    e.preventDefault();
                    setPagination((prevPag) => prevPag + 1);
                  }}
                >
                  {pagination + 1}
                </ItemPagination>
              </Pagination>
            )}
          </>
        ) : coins === undefined ? (
          <Spinner />
        ) : (
          <Message>{message}</Message>
        )}
      </CoinsWindowContainer>
    </WindowContainer>
  );
};

export default CoinsWindow;
