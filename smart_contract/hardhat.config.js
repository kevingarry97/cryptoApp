// https://eth-ropsten.alchemyapi.io/v2/xhgOt01ttYDGZABBdDwkCHeUQxQEWWge

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/xhgOt01ttYDGZABBdDwkCHeUQxQEWWge',
      accounts: ['4ebdb8ac552c7a1860f1dd8eb1ea3057089a8aae6f7308172e197b04bdc1e8de']
    }
  }
}