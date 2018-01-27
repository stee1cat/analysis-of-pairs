import { Action } from './constants';
import { Order } from './Order';
import { OrderBook } from './OrderBook';

export class Calculator {

    constructor(balance) {
        this.log = [];
        this.initialBalance = balance;
        this.balance = balance;
    }

    async calculateRoute(route) {
        this.route = route;

        for (let i = 0; i < route.length; i++) {
            let deal = route[i];

            await this.closeOrder(deal);
        }

        this.successMessage();

        return this.balance;
    }

    async closeOrder(deal) {
        let orderBook = OrderBook.get(deal.pair, deal.action);
        let order = new Order(this.balance, deal);

        for (let i = 0; i < orderBook.length; i++) {
            let quote = orderBook[i];
            let price = deal.action === Action.Sell ? 1 / quote.price : quote.price;

            if (order.addQuote(price, quote.volume)) {
                break;
            }
        }

        if (!order.closed) {
            this.errorMessage();

            return Promise.reject('');
        } else {
            this.log.push([deal.action === Action.Sell ? 'sell:' : 'buy:', order.volume, deal.pair].join(' '));
            this.balance = order.volume;

            return Promise.resolve();
        }
    }

    errorMessage() {
        console.log(['fail:', this.route.map(d => d.pair).join('-')].join(' '));
        console.log('-'.repeat(80));
    }

    successMessage() {
        this.log.map(line => console.log(line));

        console.log('delta:', this.balance - this.initialBalance);
        console.log('-'.repeat(80));
    }

}