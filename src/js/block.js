class Block {
    constructor(data) {
        this.data = data;
    }

    get hash() {
        return this.data.hash;
    }

    get number() {
        return parseInt(this.data.number);
    }

    get url() {
        return `https://etherscan.io/block/${parseInt(this.data.number)}`;
    }
}

module.exports = Block