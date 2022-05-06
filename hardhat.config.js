require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    version: '0.8.13',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mainnet: {
      url: process.env.RPC_NODE_URL_MAINNET,
      accounts: [process.env.PRIVATE_KEY]
    },
    bsctestnet: {
      url: process.env.RPC_NODE_URL_BSCTESTNET,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.SCAN_API_KEY
  }
};
