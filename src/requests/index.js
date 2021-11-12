const BASE_URL_API = "https://api.coingecko.com/api/v3";

export const requests = {
  getSimplePrice: `${BASE_URL_API}/simple/price?vs_currencies=usd&ids=`,
  getCoinsList: `${BASE_URL_API}/coins/list`,
  getCoinsMarket: `${BASE_URL_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false`,
};
