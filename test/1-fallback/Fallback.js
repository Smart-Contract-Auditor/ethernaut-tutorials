const { ethers } = require("hardhat")
const { expect } = require("chai");

describe("Fallback", async () => {

    const FALLBACK_INSTANCE = "0xA56F78be6083Bf002EB301B3F0Ea1cFBcDB68D9c";

    it("Should call the fallback contribute.", async () => {
        const iface = new ethers.Interface(["function contribute()"]);
        console.log("network: ", JSON.stringify(await ethers.provider.getNetwork()))
        const tx = await ethers.provider.call({
            to: FALLBACK_INSTANCE,
            data: iface.encodeFunctionData("contribute()", []),
            value: ethers.parseUnits("1", "wei")
        })
        console.log("tx: ", tx);
        expect(tx).to.not.be.null;
    })
})