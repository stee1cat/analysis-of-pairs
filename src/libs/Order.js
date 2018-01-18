export class Order {

    get deal() {
        return this._deal;
    }

    get balance() {
        return this._balance;
    }

    get volume() {
        return this._volume;
    }

    get closed() {
        return this._closed;
    }

    constructor(balance, deal) {
        this._balance = balance;
        this._deal = deal;
        this._volume = 0;
        this._closed = false;
    }

    /**
     * Добавление котировки из стакана
     *
     * @param {number} price
     * @param {number} volume
     * @returns {boolean} Результат исполнения сделки
     */
    addQuote(price, volume) {
        let buyVolume = this.calculateBuyVolume(price, volume);

        this._volume += buyVolume;
        this._balance -= buyVolume * price;
        this._closed = !this._balance;

        return this._closed;
    }

    calculateBuyVolume(price, volume) {
        let buyVolume = this._balance / price;
        let absVolume = Math.abs(volume);

        return buyVolume <= absVolume ? buyVolume : absVolume;
    }

}