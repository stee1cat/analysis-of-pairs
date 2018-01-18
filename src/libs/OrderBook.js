import BTCUSD from '../../order-books/BTCUSD';
import ETHBTC from '../../order-books/ETHBTC';
import ETHUSD from '../../order-books/ETHUSD';
import { Pair } from './constants';

const orderBooks = {
    [Pair.BTC_USD]: BTCUSD,
    [Pair.ETH_BTC]: ETHBTC,
    [Pair.ETH_USD]: ETHUSD
};

export class OrderBook {

    static get(pair, isBuy = false) {
        let orders = orderBooks[pair].filter(o => o.isBuy === isBuy);

        return orders.length ? orders[0].prices : false;
    }
}
