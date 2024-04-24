const { ethers } = require("hardhat")
const { expect } = require("chai");
const abi = require("../../artifacts/contracts/1-fallback/Fallback.sol/Fallback.json").abi;

const FALLBACK_ADDRESS = "";
const PLAYER_ADDRESS = "0x08187eCD067e0bA4739e3a1520cFe8cbAD410a09";

describe("Fallback", async () => {

    const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);
    it("Should verify the contract owner.", async () => {
        const fallbackContract = new ethers.Contract(FALLBACK_ADDRESS, abi, provider);
        const owner = await fallbackContract.owner();
        console.log("owner is: ", owner);
        expect(owner).to.equal(PLAYER_ADDRESS);
    });

    it("Should verify the balance is zero.", async () => {
        const balance = await provider.getBalance(FALLBACK_ADDRESS);
        console.log("balance is: ", balance);
        expect(balance).to.equal(0);
    });

})