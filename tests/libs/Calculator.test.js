import { Calculator } from '../../src/libs/Calculator';
import { Action, Pair } from '../../src/libs/constants';

describe('Calculator', function () {

    it('calculateRoute', async function () {
        let calculator = new Calculator(1);

        let balance = await calculator.calculateRoute([
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
        ]);

        expect(balance.toFixed(6)).toEqual('0.964818');
    });

});