export const Currency = {
    USD: 'USD',
    BTC: 'BTC',
    ETH: 'ETH'
};

export const Pair = {
    BTC_USD: [Currency.BTC, Currency.USD].join(''),
    ETH_BTC: [Currency.ETH, Currency.BTC].join(''),
    ETH_USD: [Currency.ETH, Currency.USD].join('')
};

export const Action = {
    Buy: false,
    Sell: true
};