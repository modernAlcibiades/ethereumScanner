const ethers = require('ethers');
const { Wallet, utils } = ethers;

const axios = require('axios');
const CHAIN = 'mainnet';
const INFURA_NODE = `https://${CHAIN}.infura.io/v3/c7310ea1d36343bd96955863aa37dfee`;

const Block = require('./block.js');
const Trie = require('./Trie.js');
//const Txn = require('./transaction.js');

let getBlockTransactions = false;
let blocks = new Trie();
let blockList = [];
let MAX_BLOCKS = 2;

async function downloadBlock(blockNumber = 'latest') {
    let request = {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockByNumber",
        params: [
            blockNumber,
            getBlockTransactions
        ]
    }
    let data = await axios.post(INFURA_NODE, request).then((response) => { return response.data; });
    let block;
    if (data.error) {
        console.log(data.error);
    } else {
        console.log("Downloaded new block")
        console.log(data.result);
        block = new Block(await data.result);
        blocks.insert(block.number, block);
    }
    return block;
}

async function getBlock(blockNumber) {
    let block = blocks.getValue();
    if (block === null) {
        block = downloadBlock(blockNumber);
    }
    return block;
}

async function populateBlocks() {
    let blockNumber = 'latest';
    while (blocks.length < MAX_BLOCKS) {
        let block = await getBlock(blockNumber, false);
        blockNumber = '0x' + (parseInt(block.number) - 1).toString(16);
    }
}

function returnBlocks() {
    return blocks;
}

function toggleBlockTransactions() {
    blockTransactions = !blockTransactions;
}

module.exports = { getBlock, populateBlocks, returnBlocks };