if(typeof web3 != 'undefined') {
  web3 = new Web3(web3.currentProvider) // what Metamask injected
} else {
  // Instantiate and set Ganache as your provider
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// The default (top) wallet account from a list of test accounts
web3.eth.defaultAccount = web3.eth.accounts[0];

// The interface definition for your smart contract (the ABI)
var StarNotary = web3.eth.contract(
  [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "starsForSale",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenIdToStarInfo",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "dec",
          "type": "string"
        },
        {
          "name": "mag",
          "type": "string"
        },
        {
          "name": "cent",
          "type": "string"
        },
        {
          "name": "story",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "coordinatesToTokenId",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "dec",
          "type": "string"
        },
        {
          "name": "mag",
          "type": "string"
        },
        {
          "name": "cent",
          "type": "string"
        },
        {
          "name": "story",
          "type": "string"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "createStar",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "putStarUpForSale",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buyStar",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "checkIfStarExist",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
);

// Grab the contract at specified deployed address with the interface defined by the ABI
var starNotary = StarNotary.at('0x26c6ea538b9627ef68bc98e1a06b2c6923884779');

function lookup() {
  var name = document.getElementById("nameInput").value.trim();
  var ra = document.getElementById("raInput").value.trim();
  var dec = document.getElementById("decInput").value.trim();
  var mag = document.getElementById("magInput").value.trim();
  var tokenId = document.getElementById("tokenIdInput").value.trim();
  var story = document.getElementById("storyTextArea").value.trim();

  if (name === "" || ra === "" || dec === "" || mag === "" || tokenId  === "" || story  === "") {
    toastr.error(null, 'You must provide all star fields to claim a star', {positionClass: 'toast-top-full-width'})
    return;
  }

  web3.eth.getAccounts(function(error, accounts) {
    if (error) {
      console.error(error);
      return;
    }
    var account = accounts[0]
    starNotary.createStar.sendTransaction(name, ra, dec, mag, story, tokenId, { from: account }, function(error, result) {
      if (!error) {
        document.getElementById("nameInput").value = '';
        document.getElementById("raInput").value = '';
        document.getElementById("decInput").value = '';
        document.getElementById("magInput").value = '';
        document.getElementById("tokenIdInput").value = '';
        document.getElementById("storyTextArea").value = '';

        var txHash = result;
        console.log('The transaction hash is: ' + txHash);
        toastr.info(null, 'Star claim is currently processing ... Tx: <a target="_blank" style="color: white;" href="https://rinkeby.etherscan.io/tx/' + txHash + '">' + txHash + '</a>', {timeOut: '-1', positionClass: 'toast-top-full-width'});

        var starClaimedEvent = starNotary.Transfer();
        starClaimedEvent.watch(function(error, result) {
          if (!error) {
            toastr.success(null, 'Star claimed successfully. Tx: <a target="_blank" style="color: white;" href="https://rinkeby.etherscan.io/tx/' + txHash + '">' + txHash + '</a>', {timeOut: '-1', positionClass: 'toast-top-full-width'});
          } else {
            console.error('Error claiming star', error);
           toastr.error(null, 'Claiming star failed, see logs for details', {positionClass: 'toast-top-full-width'});
          }
        });
      } else {
        console.error('Error sending transaction', error);
        toastr.error(null, 'Transaction failed, see logs for details', {positionClass: 'toast-top-full-width'});
      }
    });
  });
};

function createStar() {
  var tokenId = document.getElementById("searchInput").value.trim();
  if (tokenId === "") {
    toastr.error(null, 'You must provide a Token ID to look up a star', {positionClass: 'toast-top-full-width'})
    return;
  }
  web3.eth.getAccounts(function(error, accounts) {
    if (error) {
      console.error(error);
      return;
    }
    var account = accounts[0];
    starNotary.tokenIdToStarInfo.call(tokenId, function(error, result) {
      if (!error) {
        document.getElementById("searchInput").value = '';
        console.log('Star found: ', result);
        toastr.success(null, 'Star for token ' + tokenId + ' was found: ' + JSON.stringify(result), {timeOut: '-1', positionClass: 'toast-top-full-width'});
      } else {
        console.error('Error looking up star', error);
        toastr.error(null, 'Search failed, see logs for details', {positionClass: 'toast-top-full-width'});
      }
    });
  });
}