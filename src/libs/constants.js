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

export const Routes = [
    [
        {
            pair: Pair.BTC_USD,
            action: Action.Buy
        },
        {
            pair: Pair.ETH_BTC,
            action: Action.Buy
        },
        {
            pair: Pair.ETH_USD,
            action: Action.Sell
        }
    ],
    [
        {
            pair: Pair.ETH_USD,
            action: Action.Buy
        },
        {
            pair: Pair.ETH_BTC,
            action: Action.Sell
        },
        {
            pair: Pair.BTC_USD,
            action: Action.Sell
        }
    ],
    [
        {
            pair: Pair.ETH_BTC,
            action: Action.Buy
        },
        {
            pair: Pair.ETH_USD,
            action: Action.Sell
        },
        {
            pair: Pair.BTC_USD,
            action: Action.Buy
        }
    ],
    [
        {
            pair: Pair.BTC_USD,
            action: Action.Sell
        },
        {
            pair: Pair.ETH_USD,
            action: Action.Buy
        },
        {
            pair: Pair.ETH_BTC,
            action: Action.Sell
        }
    ],
    [
        {
            pair: Pair.ETH_BTC,
            action: Action.Sell
        },
        {
            pair: Pair.BTC_USD,
            action: Action.Sell
        },
        {
            pair: Pair.ETH_USD,
            action: Action.Sell
        }
    ],
    [
        {
            pair: Pair.ETH_USD,
            action: Action.Sell
        },
        {
            pair: Pair.BTC_USD,
            action: Action.Buy
        },
        {
            pair: Pair.ETH_BTC,
            action: Action.Buy
        }
    ],
    [
        {
            pair: Pair.ETH_BTC,
            action: Action.Sell
        },
        {
            pair: Pair.BTC_USD,
            action: Action.Sell
        },
        {
            pair: Pair.ETH_USD,
            action: Action.Buy
        },
    ]
];