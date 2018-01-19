import { Action, Currency, Pair, Routes } from './libs/constants';
import { Order } from './libs/Order';
import { OrderBook } from './libs/OrderBook';

const INITIAL_BALANCE = 100;

Routes.map(function (path) {
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

        console.log(deal.action === Action.Sell ? 'sell:' : 'buy:', order.volume, order.deal.pair);
    });

    console.log('-'.repeat(80));
});