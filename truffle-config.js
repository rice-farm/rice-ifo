const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()


const mnemonic = process.env.MNEMONIC || 'start door favorite rule local display minute whale business destroy neglect indicate'
const providerUrl = {
  bsc: 'https://bsc-dataseed1.binance.org',
  tbsc: 'https://data-seed-prebsc-2-s3.binance.org:8545'
}

const tbscProvider = new HDWalletProvider({
  mnemonic,
  providerOrUrl: providerUrl.tbsc
})

const bscProvider = new HDWalletProvider({
  mnemonic,
  providerOrUrl: providerUrl.bsc
})

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   test: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   tbsc:{
     provider: tbscProvider,
     network_id: "97",
     gasPrice: 20000000000
   },

   bsc: {
     provider: bscProvider,
     network_id: "56"
   },

   ropsten:{
     provider: function() {
     },
     network_id: "3"
   },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: '1J2SMZWKIBVRCMM8Q4TBEWRA4F3S2F6AJD'
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: { optimizer: { enabled: true, runs: 200 }}
    }
  }
};
