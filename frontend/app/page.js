import React, { useState } from 'react';
import { ethers } from 'ethers';
import './Mint.css'; 

const contractAddress = "0x3248646170707DC9079dEAe800603015F02070EC";
const abi = [
  {
      "type": "constructor",
      "inputs": [
          {
              "name": "_baseTokenURI",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "MAX_PER_WALLET",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "MAX_SUPPLY",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "MINT_PRICE",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "approve",
      "inputs": [
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "baseTokenURI",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getApproved",
      "inputs": [
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "operator",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "mint",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
  },
  {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "data",
              "type": "bytes",
              "internalType": "bytes"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
          {
              "name": "operator",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "approved",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
          {
              "name": "interfaceId",
              "type": "bytes4",
              "internalType": "bytes4"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "tokenByIndex",
      "inputs": [
          {
              "name": "index",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "tokenOfOwnerByIndex",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "index",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "event",
      "name": "Approval",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "approved",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "tokenId",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "operator",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "approved",
              "type": "bool",
              "indexed": false,
              "internalType": "bool"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "Transfer",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "tokenId",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "error",
      "name": "ERC721EnumerableForbiddenBatchMint",
      "inputs": []
  },
  {
      "type": "error",
      "name": "ERC721IncorrectOwner",
      "inputs": [
          {
              "name": "sender",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC721InsufficientApproval",
      "inputs": [
          {
              "name": "operator",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC721InvalidApprover",
      "inputs": [
          {
              "name": "approver",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC721InvalidOperator",
      "inputs": [
          {
              "name": "operator",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC721InvalidOwner",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC721InvalidReceiver",
      "inputs": [
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC721InvalidSender",
      "inputs": [
          {
              "name": "sender",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC721NonexistentToken",
      "inputs": [
          {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC721OutOfBoundsIndex",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "index",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "MyNFT__ExceedsMaxSupply",
      "inputs": []
  },
  {
      "type": "error",
      "name": "MyNFT__IncorrectETHSent",
      "inputs": []
  },
  {
      "type": "error",
      "name": "MyNFT__UserCanOnlyMint2NFTs",
      "inputs": []
  }
];

export default function Mint() {
  const [status, setStatus] = useState('');

  async function mintNFT() {
      if (typeof window.ethereum !== 'undefined') {
          try {
              await window.ethereum.request({ method: 'eth_requestAccounts' });

              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              const contract = new ethers.Contract(contractAddress, abi, signer);

              const transaction = await contract.mint({ value: ethers.utils.parseEther("0.01") });
              await transaction.wait();

              setStatus('Minting successful!');
          } catch (error) {
              console.error(error);
              setStatus('Minting failed: ' + error.message);
          }
      } else {
          setStatus('Please install MetaMask!');
      }
  }

  return (
      <div className="mint-container">
          <h1>Mint Your NFT</h1>
          <img src="https://ipfs.io/ipfs/bafybeia4en3lenjlknyzrsoyya4g4djlcgi4emh26ncr7zpa4a4236yfqm/" alt="NFT" className="nft-image" />
          <button className="mint-button" onClick={mintNFT}>Mint</button>
          <p className="status-message">{status}</p>
          <a href="https://ipfs.io/ipfs/bafybeia4en3lenjlknyzrsoyya4g4djlcgi4emh26ncr7zpa4a4236yfqm/" target="_blank" rel="noopener noreferrer" className="nft-link">View NFT Image</a>
      </div>
  );
}