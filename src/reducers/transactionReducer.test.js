import { removeTransaction, transactionReducer } from "./transactionReducer";

describe("Transaction Reducer Tests", () => {
  it("Create new transaction", () => {
    const transaction = {
      id: "idgenerica",
      walletId: "walletidgenerica",
      type: 0,
      coin: {
        image: "imageSource",
        name: "Name",
        id: "coinidgenerica",
      },
      amount: 3,
      price: 2000,
      date: "fecha",
    };

    let state;
    state = transactionReducer([], {
      type: "@transaction/create",
      payload: transaction,
    });

    expect(state).toEqual([transaction]);
  });

  it("Remove transaction", () => {
    const transaction = {
      id: "idgenerica",
      walletId: "walletidgenerica",
      type: 0,
      coin: {
        image: "imageSource",
        name: "Name",
        id: "coinidgenerica",
      },
      amount: 3,
      price: 2000,
      date: "fecha",
    };

    let state;
    state = transactionReducer(
      [transaction],
      removeTransaction(transaction.id)
    );

    expect(state).toEqual([]);
  });

  it("Remove transaction id is not finded, stay the same", () => {
    const transaction = {
      id: "idgenerica",
      walletId: "walletidgenerica",
      type: 0,
      coin: {
        image: "imageSource",
        name: "Name",
        id: "coinidgenerica",
      },
      amount: 3,
      price: 2000,
      date: "fecha",
    };

    let state;
    state = transactionReducer([transaction], removeTransaction("otraid"));

    expect(state).toEqual([transaction]);
  });
});
