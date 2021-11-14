import React, { useEffect, useState } from "react";
import Price from "../Atoms/Price";
import Cryptocurrency from "../Cryptocurrency/Cryptocurrency";
import "moment/locale/es";
import moment from "moment";

import {
  AiOutlineCalendar,
  AiOutlineDollarCircle,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineDelete,
} from "react-icons/ai";

import {
  TransactionContainer,
  TransactionType,
  TransactionInfo,
  CoinContainer,
  InfoField,
  Moment,
  TransactionRemove,
} from "./Transaction.elements";

import { OPERATION_TYPE } from "../AddTransactionForm/AddTransactionForm";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../../reducers/transactionReducer";

const Transaction = ({ id, coin, type, amount, price, date }) => {
  moment.locale("es");

  const formattedDate = moment(date).format("l");
  const [timeAgo, setTimeAgo] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeAgo(moment(date).startOf().fromNow());
    setInterval(() => {
      setTimeAgo(moment(date).startOf().fromNow());
    }, [30000]);
  }, [date]);

  const remove = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <TransactionContainer>
      {timeAgo && (
        <Moment>
          <AiOutlineClockCircle />
          {timeAgo}
        </Moment>
      )}
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
          <span>
            <AiOutlineDollarCircle />
            Precio
          </span>{" "}
          <Price price={price} operationType={type} />
        </InfoField>
        <InfoField title={moment(date).format("MMMM Do YYYY, h:mm:ss a")}>
          <span>
            <AiOutlineCalendar />
            Fecha
          </span>{" "}
          {formattedDate}
        </InfoField>
        <InfoField>
          <span>
            <AiOutlineCheckCircle />
            Estado
          </span>{" "}
          Realizada
        </InfoField>
      </TransactionInfo>
      <TransactionRemove onClick={remove}>
        <AiOutlineDelete />
        Borrar transacción
      </TransactionRemove>
    </TransactionContainer>
  );
};

export default Transaction;
