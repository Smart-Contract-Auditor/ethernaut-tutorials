const { ethers } = require("hardhat")
const { expect } = require("chai");
const abi = require("../../artifacts/contracts/3-coin-flip/CoinFlip.sol/CoinFlip.json").abi;

const COIN_FLIP_ADDRESS = "0x03ca5642E7607De0C0B12c154b640D2E556A59F0";

describe("CoinFlip", async () => {

    const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);
    it("Should verify that consecutive wins is 10.", async () => {
        const coinFlipContract = new ethers.Contract(COIN_FLIP_ADDRESS, abi, provider);
        const consecutiveWins = await coinFlipContract.consecutiveWins();
        console.log("consecutiveWins is: ", consecutiveWins);
        expect(consecutiveWins).to.equal(10);
    });

})