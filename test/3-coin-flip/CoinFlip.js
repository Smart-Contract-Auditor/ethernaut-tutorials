const { ethers } = require("hardhat")
const { expect } = require("chai");
const abi = require("../../artifacts/contracts/3-coin-flip/CoinFlip.sol/CoinFlip.json").abi;

const COIN_FLIP_ADDRESS = "";

describe("CoinFlip", async () => {

    const provider = ethers.provider;
    it("Should verify that consecutive wins is 10.", async () => {
        const coinFlipContract = new ethers.Contract(COIN_FLIP_ADDRESS, abi, provider);
        const consecutiveWins = await coinFlipContract.consecutiveWins();
        console.log("consecutiveWins is: ", consecutiveWins);
        expect(consecutiveWins).to.equal(10);
    });

})