import { Action, Pair } from '../../src/libs/constants';
import { OrderBook } from '../../src/libs/OrderBook';

describe('OrderBook', function () {
    it('get', function () {
        let orderBook = OrderBook.get(Pair.ETH_BTC, Action.Buy);

        expect(orderBook).toEqual(expect.arrayContaining([
            {
                volume: -1.2E-05,
                price: 0.09122
            }
        ]));
    });
});