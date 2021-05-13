pragma solidity 0.6.12;

import "@pantherswap/panther-swap-lib/contracts/proxy/TransparentUpgradeableProxy.sol";

/**
 * @dev PantherSwap: Initial Panther Offering
 *
 * Website: https://pantherswap.com
 * Dex: https://dex.pantherswap.com
 * Twitter: https://twitter.com/PantherSwap
 *
 */
contract IPOUpgradeProxy is TransparentUpgradeableProxy {

    constructor(address admin, address logic, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) public {

    }

}
