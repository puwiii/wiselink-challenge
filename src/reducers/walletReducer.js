export const walletReducer = (state = [], action) => {
  switch (action.type) {
    case "@wallet/create":
      return [...state, action.payload];

    case "@wallet/remove": {
      return state.filter((wallet) => {
        return wallet.id !== action.payload.walletId;
      });
    }

    case "@wallet/updateName": {
      const { newName, walletId } = action.payload;

      return state.map((wallet) => {
        if (wallet.id === walletId) {
          return { ...wallet, name: newName };
        } else {
          return { ...wallet };
        }
      });
    }

    case "@wallet/addAsset": {
      const { payloadAsset, walletId } = action.payload;
      return state.map((wallet) => {
        if (wallet.id === walletId) {
          let assetAlreadyExists = false;
          const newAssets = wallet.assets.map((asset) => {
            if (payloadAsset.id === asset.id) {
              const newAmount = asset.amount + payloadAsset.amount;
              assetAlreadyExists = true;
              return { ...asset, amount: newAmount };
            } else {
              return { ...asset };
            }
          });
          if (!assetAlreadyExists) {
            newAssets.push(payloadAsset);
          }
          return { ...wallet, assets: newAssets };
        } else {
          return { ...wallet };
        }
      });
    }

    case "@wallet/removeAsset": {
      const { payloadAsset, walletId } = action.payload;
      return state.map((wallet) => {
        if (wallet.id === walletId) {
          const newAssets = [];
          wallet.assets.forEach((asset) => {
            if (payloadAsset.id === asset.id) {
              const newAmount = asset.amount - payloadAsset.amount;
              if (!(newAmount === 0)) {
                newAssets.push({ ...asset, amount: newAmount });
              }
            } else {
              newAssets.push({ ...asset });
            }
          });
          return { ...wallet, assets: newAssets };
        } else {
          return { ...wallet };
        }
      });
    }

    default:
      return state;
  }
};

const generateID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const createNewWallet = (name) => ({
  type: "@wallet/create",
  payload: {
    id: generateID(),
    name: name,
    value: 0,
    assets: [],
  },
});

export const removeWallet = (walletId) => ({
  type: "@wallet/remove",
  payload: { walletId },
});

export const addAssetToWallet = (walletId, asset, amount) => ({
  type: "@wallet/addAsset",
  payload: {
    walletId: walletId,
    payloadAsset: {
      id: asset.id,
      name: asset.name,
      symbol: asset.symbol,
      image: asset.image,
      amount: amount,
    },
  },
});

export const removeAssetToWallet = (walletId, asset, amount) => ({
  type: "@wallet/removeAsset",
  payload: {
    walletId: walletId,
    payloadAsset: {
      id: asset.id,
      amount: amount,
    },
  },
});

export const updateNameToWallet = (walletId, name) => ({
  type: "@wallet/updateName",
  payload: {
    walletId: walletId,
    newName: name,
  },
});
