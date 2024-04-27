const { ethers } = require("hardhat")
const { expect } = require("chai");
const abi = require("../../artifacts/contracts/2-fallout/Fallout.sol/Fallout.json").abi;

const FALLOUT_ADDRESS = "";
const PLAYER_ADDRESS = "0x08187eCD067e0bA4739e3a1520cFe8cbAD410a09";

describe("Fallback", async () => {

    const provider = ethers.provider;
    it("Should verify the contract owner.", async () => {
        const falloutContract = new ethers.Contract(FALLOUT_ADDRESS, abi, provider);
        const owner = await falloutContract.owner();
        console.log("owner is: ", owner);
        expect(owner).to.equal(PLAYER_ADDRESS);
    });

})