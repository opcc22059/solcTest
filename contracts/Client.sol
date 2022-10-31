// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.17;

interface IERC20 {
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

interface IServer {
    function transferETH(
        address to
    ) external payable;
}


contract Client {

    address public token;
    address public sender;
    address public receiver;

    receive() external payable {
        IERC20(token).transferFrom(sender, receiver, 10);
    }

    fallback() external payable {
        IERC20(token).transferFrom(sender, receiver, 10);
    }

    function callServer(address server, address _token, address from, address to) external payable {
        token = _token;
        sender = from;
        receiver = to;
        IServer(server).transferETH(address(this));
    }

}