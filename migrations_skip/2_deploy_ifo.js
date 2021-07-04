const IFO = artifacts.require("IFO");

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

  const lpToken = '0xc9dbefe1179f9bed3a0affaf124c0a641666d1b4'; // ts-bnb cake lp v1
  const offeringToken = '0xF40B377F38FCCE1e3bFb4ddF5BbF1C8BB7E0dc8c'; // rice
  const startBlock = '9701598';
  const endBlock = '20046543';
  const offeringAmount = '300000000000000000000';
  const raisingAmount = '3000000000000000000'; // 000000000000000000
  const adminAddress = '0x87500968B83f3f7091B85ea58dAaBc815935b553'; // dev account

  await deployer.deploy(
    IFO,
    lpToken,
    offeringToken,
    startBlock,
    endBlock,
    offeringAmount,
    raisingAmount,
    adminAddress
  );
};