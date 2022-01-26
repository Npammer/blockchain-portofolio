// https://eth-ropsten.alchemyapi.io/v2/_3cvhaaT4mfA8poRoUfkeBUeF02sEUCA

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/_3cvhaaT4mfA8poRoUfkeBUeF02sEUCA",
      accounts: [ "925ea0fe96ec92413fd0de468c9a03ccefd1122d87262930d9d463e05daf8e17" ]
    }
  }
}

