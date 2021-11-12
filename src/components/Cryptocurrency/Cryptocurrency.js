import React from "react";

import Price from "../Atoms/Price";

import {
  CryptoContainer,
  Header,
  Name,
  Symbol,
  Main,
  Image,
} from "./Cryptocurrency.elements";

const Cryptocurrency = ({
  id,
  name,
  symbol,
  price,
  image,
  isDecorative,
  ...props
}) => {
  return (
    <CryptoContainer {...props} isDecorative={isDecorative}>
      {props.isPlaceholder ? (
        <>
          <Header>
            <Image
              src="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2422-thumb.png"
              alt="coin"
            />
            <Name>nombre</Name>
            <Symbol>simbolo</Symbol>
          </Header>
          <Main>
            <Price price={0} />
          </Main>
        </>
      ) : (
        <>
          <Header>
            <Image src={image} alt={name} />
            <Name>{name}</Name>
            <Symbol>{symbol}</Symbol>
          </Header>
          {!props.noPrice && (
            <Main>
              <Price price={price} />
            </Main>
          )}
        </>
      )}
    </CryptoContainer>
  );
};

export default Cryptocurrency;
