/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

const secret = require('./.secret.js');

const pk = secret.pk;
const apiKey = secret.apiKey;
module.exports = {
  solidity: "0.8.17",
  networks:{

    bscTest: {
	    url: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
      accounts: [pk],
      // gas: 90000000,
      gasPrice: 20000000000,
    }
  },
  etherscan: {
    apiKey: apiKey,
  }
};
