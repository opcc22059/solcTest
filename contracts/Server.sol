// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.17;

contract Server {

    receive() external payable {}

    function _safeTransferETH(address to, uint256 value) internal {
        (bool success, ) = to.call{value: value}(new bytes(0));
        require(success, "STE");
    }

    function transferETH(address to) external payable {
        require(msg.value > 0, 'msgv');
        uint256 value = address(this).balance;
        _safeTransferETH(to, value);
    }

}