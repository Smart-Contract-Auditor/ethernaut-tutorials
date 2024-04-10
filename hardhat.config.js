require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`
      },
      chains: {
        80001: {
          hardforkHistory: {
            london: 23850000
          }
        }
      }
    },
  },
  solidity: "0.8.24"
};
