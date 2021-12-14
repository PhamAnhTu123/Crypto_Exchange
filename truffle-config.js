require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("@truffle/hdwallet-provider")
var mnemonic = "Your Secret String Here!";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/58b5a2ffafbb4a13870980fb52714b6a")
      },
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
