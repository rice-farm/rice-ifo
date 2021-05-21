// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@ricefarm/rice-lib/contracts/proxy/TransparentUpgradeableProxy.sol";

/**
 * @dev RiceFarm: Initial Farm Offering
 *
 * Website: https://ricefarm.fi
 * Dex: https://swap.ricefarm.fi
 * Twitter: https://twitter.com/BobaGroup
 *
 */
contract IFOUpgradeProxy is TransparentUpgradeableProxy {

    constructor(address admin, address logic, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) public {

    }

}
