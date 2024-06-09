// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MyNFT is ERC721Enumerable {
    uint256 public constant MAX_SUPPLY = 10;
    uint256 public constant MAX_PER_WALLET = 2;
    uint256 public constant MINT_PRICE = 0.01 ether;
    string public baseTokenURI;
    uint256 private _nextTokenId;

    error MyNFT__IncorrectETHSent();
    error MyNFT__UserCanOnlyMint2NFTs();
    error MyNFT__ExceedsMaxSupply();

    constructor(string memory _baseTokenURI) ERC721("MyNFT", "MNFT") {
        baseTokenURI = _baseTokenURI;
    }

     function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function mint() public payable {
        if (msg.value != MINT_PRICE) {
            revert MyNFT__IncorrectETHSent();
        }

        if (totalSupply() >= MAX_SUPPLY) {
            revert MyNFT__ExceedsMaxSupply();
        }
        if(balanceOf(msg.sender) >= 2){
            revert MyNFT__UserCanOnlyMint2NFTs();
        }
        _nextTokenId++;
        uint256 newItemId = _nextTokenId;
        _safeMint(msg.sender, newItemId);
    }

}