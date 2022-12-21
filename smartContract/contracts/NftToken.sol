// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "../@openzeppelin/contracts/access/Ownable.sol";
import "../@openzeppelin/contracts/utils/Strings.sol";
import "./ERC721A.sol";
contract NftToken is Ownable, ERC721A{
    uint public maxTokenNum;
    uint public mintPrice = 1 ether;
    uint mintLimit;
    mapping(address => uint256) public mintCount;

    modifier mintRequire(uint _mintAmount){
        require(_mintAmount > 0 && _mintAmount <= mintLimit, "Invalid mint amount!");
        require(totalSupply() + _mintAmount <= collectionSize, "Max supply exeeded!");
        require(numberMinted(msg.sender) + _mintAmount <= mintLimit, "Can't mint this many");
        _;
    }

    constructor(string memory _name, string memory _symbol, uint256 _mintLimit, uint256 _collectionSize)ERC721A(_name,_symbol, _mintLimit, _collectionSize){
        mintLimit = _mintLimit;
    }

    // 민팅
    function _minting(uint _mintAmount) public payable mintRequire(_mintAmount){
        // 토큰 개수 확인하기
        // require(balanceOf(msg.sender) >= mintPrice * _mintAmount, "Insufficient funds!");
        // require(mintCount[msg.sender] + _mintAmount <= mintLimit, "mint limit exceeded");
        _safeMint(msg.sender, _mintAmount);
        refundIfOver(mintPrice);
    }

    function refundIfOver(uint256 _mintPrice) private {
        require(msg.value >= _mintPrice, "Need to send more ETH.");
        if (msg.value > _mintPrice) {
            payable(msg.sender).transfer(msg.value - _mintPrice);
        }
    }

    function numberMinted(address owner) public view returns (uint256) {
        return _numberMinted(owner);
    }

    
    // // metadata URI
    string private _baseTokenURI = "http://localhost:8000/metaData/";

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    // function setBaseURI(string calldata baseURI) external onlyOwner {
    //     _baseTokenURI = baseURI;
    // }
} 

//d,d,5,100,"http://localhost:8000/metaData/"