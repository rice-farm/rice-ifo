const IFOByProxy = artifacts.require("IFOByProxy");
const IFOUpgradeProxy = artifacts.require("IFOUpgradeProxy");

const fs = require('fs');
const abi = require('./abi/ifo.json')

const providerUrl = {
  bsc: 'https://bsc-dataseed1.binance.org',
  tbsc: 'https://data-seed-prebsc-1-s1.binance.org:8545'
}

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'));

module.exports = async function(deployer, a, account) {
    await deployer.deploy(IFOByProxy);

    // offering amount
    const num = 100000000 * Math.pow(10, 6);
    const numAsHex = "0x" + num.toString(16);

    // raising amount
    const num1 = 149200 * Math.pow(10, 18);
    const numAsHex1 = "0x" + num1.toString(16);

  // const proxyAdmin= '0x0F9399FC81DaC77908A2Dde54Bb87Ee2D17a3373';
  // const ifoAdmin= '0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1';
  //
  // const lpToken = '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6'; //cake-bnb
  // const offeringToken = '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f'; //blk
  // const startBlock = '2401100';
  // const endBlock = '2402320';

    const proxyAdmin= '0x8Ba9dc38B005e7FB96F59d22358D088078c5d87f'; // deployer
    const ifoAdmin= '0xE57685aa966eA75C8543961ccA05a8c689055f9a'; // ifo admin

    const lpToken = '0xc9dbefe1179f9bed3a0affaf124c0a641666d1b4'; // ts-bnb
    const offeringToken = '0xeA2cE3C20184C1814D372756360F4Be7621A70Bb'; // rice
    const startBlock = '9046543';
    const endBlock = '9051543';
    const offeringAmount = numAsHex;
    const raisingAmount = numAsHex1;
    const adminAddress = ifoAdmin;

    const abiEncodeData = web3.eth.abi.encodeFunctionCall({
      "inputs": [
        {
          "internalType": "contract IBEP20",
          "name": "_lpToken",
          "type": "address"
        },
        {
          "internalType": "contract IBEP20",
          "name": "_offeringToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_startBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_offeringAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_raisingAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_adminAddress",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, [
      lpToken,
      offeringToken,
      startBlock,
      endBlock,
      offeringAmount,
      raisingAmount,
      adminAddress
    ]);

    await deployer.deploy(IFOUpgradeProxy, proxyAdmin, IFOByProxy.address, abiEncodeData);

    console.log(proxyAdmin, IFOByProxy.address, abiEncodeData);

    // const lotteryProxy = new web3.eth.Contract(abi, IFOUpgradeProxy.address);
    // console.log((await lotteryProxy.methods.getAddressListLength().call()).toString())

};