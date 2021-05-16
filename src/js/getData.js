const ethers = require('ethers');
const { Wallet, utils } = ethers;

const axios = require('axios');
const CHAIN = 'mainnet';
const INFURA_NODE = `https://${CHAIN}.infura.io/v3/c7310ea1d36343bd96955863aa37dfee`;

const Block = require('./block.js');
//const Txn = require('./transaction.js');

let getBlockTransactions = false;
let blocks = [];
let MAX_BLOCKS = 2;

async function getBlock(blockNumber = 'latest') {
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
    if (data.error) {
        console.log(data);
    } else {
        console.log(data);
        blocks.push(new Block(await data.result));
    }
    //qrcode = newQRCode(data.)
    return data.result;
}

async function populateBlocks() {
    let blockNumber = 'latest';
    while (blocks.length < MAX_BLOCKS) {
        let result = await getBlock(blockNumber, false);
        blockNumber = '0x' + (parseInt(result.number) - 1).toString(16);
    }
}

function returnBlocks() {
    return blocks;
}

function toggleBlockTransactions() {
    blockTransactions = !blockTransactions;
}

module.exports = { getBlock, populateBlocks, returnBlocks };