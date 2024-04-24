require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`
      }
    },
  },
  solidity: {
    compilers: [
      { version: "0.4.23" },
      { version: "0.6.0" },
      { version: "0.8.24" }
    ]
  }
};
