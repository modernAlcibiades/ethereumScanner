import { writable } from 'svelte/store';
const ethers = require('ethers');
const { Wallet, utils } = ethers;

const axios = require('axios');
const CHAIN = 'mainnet';
const INFURA_NODE = `https://${CHAIN}.infura.io/v3/c7310ea1d36343bd96955863aa37dfee`;

const Trie = require('./trie.js');
//const Txn = require('./transaction.js');

class Blocks {
    constructor() {
        this.getBlockTransactions = false;
        this.blocks = new Trie();
        this.blocksDict = {};
        this.MAX_BLOCKS = 10;
        this.num_blocks = 0;
    }

    async downloadBlock(blockNumber = 'latest') {
        let request = {
            jsonrpc: "2.0",
            id: 1,
            method: "eth_getBlockByNumber",
            params: [
                blockNumber,
                this.getBlockTransactions
            ]
        }
        let data = await axios.post(INFURA_NODE, request).then((response) => { return response.data; });
        if (data.error) {
            console.log(data.error);
        } else {
            console.log("Downloaded new block")
            console.log(data.result);
            let block = await data.result;
            this.blocks.insert(await block.hash, block);
            blockNumber = BigInt(await block.number);
            this.blocksDict[blockNumber] = block.hash;
            this.num_blocks++;
        }
        return blockNumber;
    }

    async getBlock(blockNumber = 'latest') {
        let block = this.blocks.getValue(blockNumber);
        console.log(blockNumber, block);
        if (block === null) {
            block = this.downloadBlock(blockNumber);
        } else {
            console.log(`${blockNumber} block already available`)
        }
        return block;
    }


    async populateBlocks() {
        let blockNumber = 'latest';
        for (let i = this.num_blocks; i < this.MAX_BLOCKS; i++) {
            blockNumber = await this.getBlock(blockNumber, false);
            blockNumber = '0x' + (blockNumber - 1n).toString(16);
            console.log(blockNumber);
        }
    }
    returnBlocks() {
        return this.blocksDict;
    }

    async printBlocks() {
        console.log(this.blocksDict);
        return (await this.blocks).print();
    }

    toggleBlockTransactions() {
        this.getBlockTransactions = !this.getBlockTransactions;
    }
}

export const blocks = writable(new Blocks());