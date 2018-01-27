import { Order } from '../../src/libs/Order';

describe('Order, integer', function () {
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

describe('Order, ~$0.01 ETHBTC', function () {
    it('calculateBuyVolume', function () {
        let order = new Order(.0000078, {});

        expect(order.calculateBuyVolume(.09122, -1.2e-05)).toEqual(.000012);
    });

    it('addQuote', function () {
        let order = new Order(.0000078, {});
        let orders = [
            {price: .09122, volume: -0.000012},
            {price: .09122, volume: -0.000012},
            {price: .09122, volume: -0.000012},
            {price: .09122, volume: -0.000012},
            {price: .09122, volume: -0.000012},
            {price: .09122, volume: -0.000012},
            {price: .09122, volume: -0.000012},
            {price: .09122, volume: -0.000012},
            {price: .09122, volume: -0.000012},
            {price: .09123, volume: -1.074916}
        ];
        let i = 0;

        for (; i < orders.length; i++) {
            let quote = orders[i];

            if (order.addQuote(quote.price, quote.volume)) {
                break;
            }
        }

        expect(order.volume).toEqual(.00008550756413067312);
        expect(order.closed).toEqual(true);
        expect(i).toEqual(7);
    });
});