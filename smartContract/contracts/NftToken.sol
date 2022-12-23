// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "../@openzeppelin/contracts/access/Ownable.sol";
import "../@openzeppelin/contracts/utils/Strings.sol";
import "./ERC721A.sol";
import "./Token.sol";
contract NftToken is Ownable, ERC721A{
    uint public maxTokenNum;
    uint public mintPrice = 1 * 10**18;
    uint mintLimit;
    Token public coin;
    mapping(address => uint256) public mintCount;

    modifier mintRequire(uint _mintAmount){
        require(_mintAmount > 0 && _mintAmount <= mintLimit, "Invalid mint amount!");
        require(totalSupply() + _mintAmount <= collectionSize, "Max supply exeeded!");
        require(numberMinted(msg.sender) + _mintAmount <= mintLimit, "Can't mint this many");
        _;
    }

    constructor(string memory _name, string memory _symbol, uint256 _mintLimit, uint256 _collectionSize,address _coinCA)ERC721A(_name,_symbol, _mintLimit, _collectionSize){
        coin = Token(payable(_coinCA));
        mintLimit = _mintLimit;
    }

    // 민팅 가격 받아오기
    function getMintPrice() external view returns(uint){
        return mintPrice;
    }
    
    // 민팅
    function _minting(uint _mintAmount) public mintRequire(_mintAmount){
        require(coin.balanceOf(msg.sender) >= mintPrice * _mintAmount, "Insufficient funds!");
        require(mintCount[msg.sender] + _mintAmount <= mintLimit, "mint limit exceeded");
        coin.mintNft(msg.sender, mintPrice * _mintAmount);
        _safeMint(msg.sender, _mintAmount);
    }
    function numberMinted(address owner) public view returns (uint256) {
        return _numberMinted(owner);
    }
   
    // // metadata URI
    string private _baseTokenURI = "https://gateway.pinata.cloud/ipfs/QmTr3GC4F8iQJXUSHxfjGHm3zscUVZ8JeHHfio432Do3Bn/";

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function getCA() external view returns(address){
        return address(this);
    }
} 
