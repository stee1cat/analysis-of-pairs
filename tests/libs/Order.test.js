import { Order } from '../../src/libs/Order';

describe('Order', function () {
    it('calculateBuyVolume', function () {
        let order = new Order(100, {});

        expect(order.calculateBuyVolume(1, 20)).toEqual(20);
        expect(order.calculateBuyVolume(2, 100)).toEqual(50);
    });

    it('addQuote', function () {
        let order = new Order(12, {});
        let orders = [
            {price: 1, volume: 2},
            {price: 1.5, volume: 5},
            {price: 2, volume: 10},
            {price: 6, volume: 12}
        ];
        let i = 0;

        for (; i < orders.length; i++) {
            let quote = orders[i];

            if (order.addQuote(quote.price, quote.volume)) {
                break;
            }
        }

        expect(order.volume).toEqual(8.25);
        expect(order.closed).toEqual(true);
        expect(i).toEqual(2);
    });
});