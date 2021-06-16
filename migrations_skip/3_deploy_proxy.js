const IFOByProxy = artifacts.require('IFOByProxy')
const IFOUpgradeProxy = artifacts.require('IFOUpgradeProxy')
const ethers = require('ethers')
const abi = require('../build/contracts/IFOByProxy.json').abi

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'))

module.exports = async function (deployer, a, account) {
  await deployer.deploy(IFOByProxy)

  // offering amount 10000000
  const num = 10000000 * Math.pow(10, 18)
  const numAsHex = '0x' + num.toString(16)

  // raising amount 50000 LP's
  const num1 = 50000 * Math.pow(10, 18)
  const numAsHex1 = '0x' + num1.toString(16)

  // const proxyAdmin= '0x0F9399FC81DaC77908A2Dde54Bb87Ee2D17a3373';
  // const ifoAdmin= '0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1';
  //
  // const lpToken = '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6'; //cake-bnb
  // const offeringToken = '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f'; //blk
  // const startBlock = '2401100';
  // const endBlock = '2402320';

  const RAISING_AMOUNT = '50000000000000000000000'

  const START_BLOCK = '8156543'
  const END_BLOCK = '8243000'

  const TS_BNB_LP = '0xd0fDA937c512083091bA6e6193e421e6f125043f'
  const RICE_TOKEN = '0xC4eEFF5aab678C3FF32362D80946A3f5De4a1861'

  const proxyAdmin = '0x8Ba9dc38B005e7FB96F59d22358D088078c5d87f' // deployer
  const ifoAdmin = '0x87500968B83f3f7091B85ea58dAaBc815935b553' // dev

  const lpToken = TS_BNB_LP // ts-bnb testnet: 0xc9dbefe1179f9bed3a0affaf124c0a641666d1b4
  const offeringToken = RICE_TOKEN // rice testnet: 0xF40B377F38FCCE1e3bFb4ddF5BbF1C8BB7E0dc8c
  const startBlock = START_BLOCK
  const endBlock = END_BLOCK
  const offeringAmount = numAsHex
  const raisingAmount = numAsHex1
  const adminAddress = ifoAdmin

  const abiEncodeData = web3.eth.abi.encodeFunctionCall({
    'inputs': [
      {
        'internalType': 'contract IBEP20',
        'name': '_lpToken',
        'type': 'address'
      },
      {
        'internalType': 'contract IBEP20',
        'name': '_offeringToken',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_startBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_endBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_offeringAmount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_raisingAmount',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_adminAddress',
        'type': 'address'
      }
    ],
    'name': 'initialize',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, [
    lpToken,
    offeringToken,
    startBlock,
    endBlock,
    offeringAmount,
    raisingAmount,
    adminAddress
  ])

  const params = [lpToken, offeringToken, startBlock, endBlock, offeringAmount, raisingAmount, adminAddress]
  const ifoInterface = new ethers.utils.Interface(abi)
  const callData = ifoInterface.encodeFunctionData('initialize', params)

  await deployer.deploy(IFOUpgradeProxy, proxyAdmin, IFOByProxy.address, callData)

  console.log(proxyAdmin, IFOByProxy.address, callData)

  // const lotteryProxy = new web3.eth.Contract(abi, IFOUpgradeProxy.address);
  // console.log((await lotteryProxy.methods.getAddressListLength().call()).toString())

}