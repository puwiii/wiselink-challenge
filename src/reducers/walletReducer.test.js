import { walletReducer } from "./walletReducer";

describe("Wallet Reducer", () => {
  it("Add wallet to reducer", () => {
    let state;
    state = walletReducer([], {
      type: "@wallet/create",
      payload: {
        id: "_p1s7ixjfv",
        name: "Nueva cartera",
        value: 0,
        assets: [],
      },
    });
    expect(state).toEqual([
      { id: "_p1s7ixjfv", name: "Nueva cartera", value: 0, assets: [] },
    ]);
  });

  it("Remove wallet to reducer", () => {
    let state;
    state = walletReducer(
      [{ id: "_p1s7ixjfv", name: "Nueva cartera", value: 0, assets: [] }],
      { type: "@wallet/remove", payload: { walletId: "_p1s7ixjfv" } }
    );
    expect(state).toEqual([]);
  });

  it("Remove wallet id is not finded, stay the same", () => {
    let state;
    state = walletReducer(
      [{ id: "_p1s7ixjfv", name: "Nueva cartera", value: 0, assets: [] }],
      { type: "@wallet/remove", payload: { walletId: "_p1jfv" } }
    );
    expect(state).toEqual([
      { id: "_p1s7ixjfv", name: "Nueva cartera", value: 0, assets: [] },
    ]);
  });

  it("Update name to wallet", () => {
    let state;
    state = walletReducer(
      [{ id: "_p1s7ixjfv", name: "Nueva cartera", value: 0, assets: [] }],
      {
        type: "@wallet/updateName",
        payload: { walletId: "_p1s7ixjfv", newName: "Vieja cartera" },
      }
    );
    expect(state).toEqual([
      { id: "_p1s7ixjfv", name: "Vieja cartera", value: 0, assets: [] },
    ]);
  });
});
