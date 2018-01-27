import { Calculator } from './libs/Calculator';
import { Routes } from './libs/constants';

const INITIAL_BALANCE = 100;

let jobs = Routes.map(function (route) {
    let calculator = new Calculator(INITIAL_BALANCE);

    return calculator.calculateRoute(route);
});

Promise.all(jobs)
    .then(() => process.exit())
    .catch(error => console.error(error));