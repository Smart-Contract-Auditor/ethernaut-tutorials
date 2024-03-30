require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const KEY = process.env.SECRET_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    mumbai: {
      forking: {
        url: "https://endpoints.omniatech.io/v1/matic/mumbai/public"
      },
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: [KEY]
    }
  },
  solidity: "0.8.24"
};
