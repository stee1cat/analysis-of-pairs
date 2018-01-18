import { Action, Currency, Pair } from './libs/constants';
import { Order } from './libs/Order';
import { OrderBook } from './libs/OrderBook';

const routes = [
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
            action: Action.Sell
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
            pair: Pair.ETH_BTC,
            action: Action.Buy
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

const INITIAL_BALANCE = 100;
const totalResult = [];

routes.map(function (path) {
    let volume = INITIAL_BALANCE;

    console.log('initial balance:', volume);

    path.map(function (deal) {
        let orderBook = OrderBook.get(deal.pair, deal.action);
        let order = new Order(volume, deal);

        for (let i = 0; i < orderBook.length; i++) {
            let quote = orderBook[i];
            let price = deal.action === Action.Sell ? 1 / quote.price : quote.price;

            if (order.addQuote(price, quote.volume)) {
                break;
            }
        }

        volume = order.volume;

        console.log(deal.action ? 'sell:' : 'buy:', order.volume, order.deal.pair);
    });

    console.log('-'.repeat(80));
});