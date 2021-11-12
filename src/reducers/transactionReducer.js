export const transactionReducer = (state = [], action) => {
  switch (action.type) {
    case "@transaction/create": {
      return [action.payload, ...state];
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
      ...coin,
    },
    amount: amount,
    price: price,
    date: Date.now(),
  },
});
