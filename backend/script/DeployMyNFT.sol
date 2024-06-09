// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/MyNFT.sol";

contract DeployMyNFT is Script {
    function setUp() public {}

    function run() public {
        string memory baseTokenURI = "ipfs://bafybeia4en3lenjlknyzrsoyya4g4djlcgi4emh26ncr7zpa4a4236yfqm/";
        vm.startBroadcast();
        new MyNFT(baseTokenURI);
        vm.stopBroadcast();
    }
}