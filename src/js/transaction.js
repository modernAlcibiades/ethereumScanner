
class Transaction {
    constructor(data) {
        this.data = data;
    }

    get url() {
        return `https://etherscan.io/tx/${this.data.number}`;
    }
}

module.exports = { Transaction }