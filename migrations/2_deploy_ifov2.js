const IFOv2 = artifacts.require("IFOv2");

module.exports = async (deployer) => {
  // const num = 50 * Math.pow(10, 18);
  // const numAsHex = "0x" + num.toString(16);

  // Estimated Target Date: Tue Jun 01 2021 12:36:11 GMT-0700 (Pacific Daylight Time)
  // time to start https://bscscan.com/block/countdown/7916543

  // Estimated Target Date: Fri May 21 2021 14:22:59 GMT-0700 (Pacific Daylight Time)
  // https://testnet.bscscan.com/block/countdown/9046543

  // https://testnet.bscscan.com/block/countdown/9051543

  // 1 year later Tue Jun 07 2022
  // https://testnet.bscscan.com/block/countdown/20046543

  // const lpToken = '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6';
  // const offeringToken = '0x009cf7bc57584b7998236eff51b98a168dcea9b0';
  // const startBlock = '2401192';
  // const endBlock = '2402392';
  // const offeringAmount = '100';
  // const raisingAmount = '100000';
  // const adminAddress = '0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1';

  const lpToken = '0xC9dbefe1179f9BeD3A0AFFAF124C0A641666d1b4'; // ts-bnb cake lp v1
  const lpToken2 = '0x0cd6c8b18afd5586e54ae2cff0f6da1391185e25'; // rice-bnb cake lp v1
  const offeringToken = '0x4900ac3B97D6Bbe0Bc30893521D1cb6354566eE2'; // rice
  const startBlock = '10562178'; // in 1 day 9 hours
  const endBlock = '20046543'; // in a year
  const offeringAmount = '300000000000000000000';
  const raisingAmount = '3000000000000000000'; // 000000000000000000
  const adminAddress = '0x87500968B83f3f7091B85ea58dAaBc815935b553'; // dev account


  const tsPool = {
    pid: 0,
    offeringAmount: '120000000000000000000000', // 120T
    raisingAmount: '500000000000000000000', // 500 LP's (price around 800) = ~400k total
    limitPerUserInLp: '1220000000000000000', // 1.22 LP's
    hasTax: false
  }

  const ricePool = {
    pid: 1,
    offeringAmount: '180000000000000000000000', // 120T
    raisingAmount: '12000000000000000000000', // 12000 LP's (price around 50) = ~600k total
    limitPerUserInLp: 0, // no limit
    hasTax: true
  }

  const TS_BNB_LP = '0xd0fDA937c512083091bA6e6193e421e6f125043f'
  const RICE_BNB_LP_2 = '0xf2F10a571F47fadaD256de41C8ED6AC150606a19'
  const RICE_TOKEN = '0xC4eEFF5aab678C3FF32362D80946A3f5De4a1861'
  const START_BLOCK = '9390178'
  const END_BLOCK = '9447778'

  const BLOCK_PER_DAY=28800
  const BLOCK_PER_IFO = 57600


  await deployer.deploy(
    IFOv2,
    TS_BNB_LP,
    RICE_BNB_LP_2,
    RICE_TOKEN,
    START_BLOCK,
    END_BLOCK,
    adminAddress
  );

  // create pools
  // const ifo = await IFOv2.deployed()
  // offeringAmount, raisingAmount, limit, hasTax, _pid
  // await ifo.setPool(offeringAmount, raisingAmount, 0, false, 0)
  // await ifo.setPool(offeringAmount, raisingAmount, 0, false, 1)


};