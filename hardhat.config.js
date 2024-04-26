require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const METAMASK_KEY = process.env.METAMASK_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`,
        accounts: [`0x${METAMASK_KEY}`]
      }
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${METAMASK_KEY}`]
    }
  },
  solidity: {
    compilers: [
      { version: "0.4.23" },
      { version: "0.6.0" },
      { version: "0.8.24" }
    ]
  }
};
