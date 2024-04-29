const { ethers } = require("hardhat")
const { expect } = require("chai");
const abi = require("../../artifacts/contracts/4-telephone/Telephone.sol/Telephone.json").abi;

const TELEPHONE_ADDRESS = "";
const PLAYER_ADDRESS = "0x08187eCD067e0bA4739e3a1520cFe8cbAD410a09";

describe("Telephone", async () => {

    const provider = ethers.provider;
    it("Should verify the contract owner.", async () => {
        const telephoneContract = new ethers.Contract(TELEPHONE_ADDRESS, abi, provider);
        const owner = await telephoneContract.owner();
        console.log("owner is: ", owner);
        expect(owner).to.equal(PLAYER_ADDRESS);
    });

})