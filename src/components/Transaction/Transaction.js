import React from "react";
import Price from "../Atoms/Price";
import Cryptocurrency from "../Cryptocurrency/Cryptocurrency";
import "moment/locale/es";
import moment from "moment";

import {
  TransactionContainer,
  TransactionType,
  TransactionInfo,
  CoinContainer,
  InfoField,
  Moment,
} from "./Transaction.elements";

import { OPERATION_TYPE } from "../AddTransactionForm/AddTransactionForm";

const Transaction = ({ id, coin, type, amount, price, date }) => {
  moment.locale("es");

  const formattedDate = moment(date).format("l");

  return (
    <TransactionContainer>
      <Moment>{moment(date).startOf().fromNow()}</Moment>
      <TransactionType>
        {type === OPERATION_TYPE.BUY && "Compra"}
        {type === OPERATION_TYPE.SELL && "Venta"}
      </TransactionType>
      <TransactionInfo>
        <CoinContainer>
          <Cryptocurrency
            image={coin.image}
            name={coin.name}
            isDecorative={true}
            noPrice={true}
          />
        </CoinContainer>
        <InfoField>
          <span>Cantidad</span> {amount}
        </InfoField>
        <InfoField>
          <span>Precio</span> <Price price={price} operationType={type} />
        </InfoField>
        <InfoField title={moment(date).format("MMMM Do YYYY, h:mm:ss a")}>
          <span>Fecha</span> {formattedDate}
        </InfoField>
        <InfoField>
          <span>Estado</span> Realizada
        </InfoField>
      </TransactionInfo>
    </TransactionContainer>
  );
};

export default Transaction;
