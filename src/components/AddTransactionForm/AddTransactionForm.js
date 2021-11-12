import React, { useRef, useEffect, useState } from "react";

import Cryptocurrency from "../Cryptocurrency/Cryptocurrency";

import Price from "../Atoms/Price";

import { useDispatch } from "react-redux";

import { MdAttachMoney } from "react-icons/md";

import {
  FormContainer,
  MainForm,
  ValuesForm,
  InputNumber,
  Label,
  Button,
  ActionNav,
  ActionItem,
} from "./AddTransactionForm.elements";
import CoinsWindow from "../CoinsWindow/CoinsWindow";
import { useModal } from "../../hooks/useModal";
import {
  addAssetToWallet,
  removeAssetToWallet,
} from "../../reducers/walletReducer";
import { createTransaction } from "../../reducers/transactionReducer";

export const OPERATION_TYPE = {
  SELL: 0,
  BUY: 1,
};

const AddTransactionForm = ({ idWallet, coinsToSell }) => {
  const [isOpenCoinsWindow, openCoinsWindow, closeCoinsWindow] =
    useModal(false);
  const [coinToOperate, setCoinToOperate] = useState(null);
  const [priceToOperate, setPriceToOperate] = useState(0);
  const [operationType, setOperationType] = useState(OPERATION_TYPE.BUY);
  const inputOperationValue = useRef();

  const dispatch = useDispatch();

  const action = operationType === OPERATION_TYPE.BUY ? "Comprar" : "Vender";

  const handleMaxValueToSell = () => {
    if (operationType === OPERATION_TYPE.SELL) {
      if (Number(inputOperationValue.current.value) > coinToOperate.amount) {
        inputOperationValue.current.value = coinToOperate.amount;
      }
    }
  };

  const handlePrice = () => {
    handleMaxValueToSell();
    if (inputOperationValue.current.value < 1) {
      inputOperationValue.current.value = 1;
    }
    if (coinToOperate) {
      const price =
        inputOperationValue.current.value * coinToOperate.current_price;
      setPriceToOperate(price);
    }
  };

  const handleOperation = (e) => {
    e.preventDefault();

    if (coinToOperate) {
      dispatch(
        createTransaction(
          idWallet,
          operationType,
          coinToOperate,
          Number(inputOperationValue.current.value),
          inputOperationValue.current.value * coinToOperate.current_price
        )
      );
      //BUY OPERATION
      if (operationType === OPERATION_TYPE.BUY) {
        dispatch(
          addAssetToWallet(
            idWallet,
            coinToOperate,
            Number(inputOperationValue.current.value)
          )
        );
      }

      //SELL OPERATION
      if (operationType === OPERATION_TYPE.SELL) {
        dispatch(
          removeAssetToWallet(
            idWallet,
            coinToOperate,
            Number(inputOperationValue.current.value)
          )
        );
      }

      setCoinToOperate(null);
      inputOperationValue.current.value = "";
      setPriceToOperate(0);
    }
  };

  useEffect(() => {
    setCoinToOperate(null);
    inputOperationValue.current.value = "";
    setPriceToOperate(0);
  }, [operationType]);

  useEffect(() => {
    if (coinToOperate) {
      handlePrice();
    }
  }, [coinToOperate]); //eslint-disable-line

  return (
    <FormContainer>
      <ActionNav>
        <ActionItem
          onClick={() => setOperationType(OPERATION_TYPE.BUY)}
          isActive={operationType === OPERATION_TYPE.BUY}
        >
          Comprar
        </ActionItem>
        <ActionItem
          onClick={() => setOperationType(OPERATION_TYPE.SELL)}
          isActive={operationType === OPERATION_TYPE.SELL}
        >
          Vender
        </ActionItem>
      </ActionNav>
      {/* <Title>{action} cryptomoneda</Title> */}
      <MainForm>
        {coinToOperate ? (
          <Cryptocurrency
            key={coinToOperate.id}
            name={coinToOperate.name}
            symbol={coinToOperate.symbol}
            price={coinToOperate.current_price}
            image={coinToOperate.image}
            onClick={openCoinsWindow}
          />
        ) : (
          <Cryptocurrency isPlaceholder={true} onClick={openCoinsWindow} />
        )}

        <ValuesForm>
          <Label htmlFor="value">Cantidad a {action}</Label>
          <InputNumber
            ref={inputOperationValue}
            type="number"
            name="value"
            min={1}
            onChange={() => handlePrice()}
            disabled={!coinToOperate}
          />
          <Price price={priceToOperate} operationType={operationType} />
          <Button
            onClick={handleOperation}
            disabled={!(coinToOperate && inputOperationValue.current.value)}
          >
            {" "}
            <MdAttachMoney />
            {action}
          </Button>
        </ValuesForm>
      </MainForm>

      {isOpenCoinsWindow && (
        <CoinsWindow
          coinsToSell={
            operationType === OPERATION_TYPE.SELL ? coinsToSell : null
          }
          setCoinToOperate={setCoinToOperate}
          closeWindow={closeCoinsWindow}
        />
      )}
    </FormContainer>
  );
};

export default AddTransactionForm;
