export const transactionReducer = (state = [], action) => {
  switch (action.type) {
    case "@transaction/create": {
      return [action.payload, ...state];
    }

    case "@transaction/remove": {
      return state.filter((transaction) => {
        return transaction.id !== action.payload.transactionId;
      });
    }

    default:
      return state;
  }
};

const generateID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const createTransaction = (walletId, type, coin, amount, price) => ({
  type: "@transaction/create",
  payload: {
    id: generateID(),
    walletId: walletId,
    type: type,
    coin: {
      image: coin.image,
      name: coin.name,
      id: coin.id,
    },
    amount: amount,
    price: price,
    date: Date.now(),
  },
});

export const removeTransaction = (transactionId) => ({
  type: "@transaction/remove",
  payload: { transactionId },
});
