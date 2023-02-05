// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./NftToken.sol";
import "./Token.sol";
contract NFTtrade{
    NftToken public nft;
    Token public coin;
    constructor(address _tokenAddress, address _coinAddress){
        nft = NftToken(_tokenAddress);
        coin = Token(payable(_coinAddress));
    }

    struct TokenInfo{
        uint tokenId;
        uint price;
    }

    mapping(uint => uint) public tokenPrices;
    uint[] public SaleTokenList;

    // 판매등록
    function salesToken(uint _tokenId, uint _price) public{
        // ownerOf(_tokenId) 토큰 주인 호출
        address tokenOwner = nft.ownerOf(_tokenId);
        require(tokenOwner == msg.sender);
        require(_price > 0 );

        tokenPrices[_tokenId] = _price;
        SaleTokenList.push(_tokenId);
    }

    // NFT구매
    function purchaseToken(uint _tokenId) public{
        address tokenOwner = nft.ownerOf(_tokenId);
        require(tokenOwner != msg.sender, "You can't buy your own NFT!");
        require(tokenPrices[_tokenId] > 0,"This NFT is not for sale!");
        // 가격 체크하는곳
        require(coin.checkCoinBalance(msg.sender) >= tokenPrices[_tokenId], "Not enough seed!");
        coin.mintNft(msg.sender, tokenPrices[_tokenId]);
        nft.transferFrom(tokenOwner, msg.sender, _tokenId);
        tokenPrices[_tokenId] = 0;
        popSaleToken(_tokenId);
    }

    // 판매리스트 제거
    function popSaleToken(uint _tokenId) public returns (bool){
        address tokenOwner = nft.ownerOf(_tokenId);
        require(tokenOwner == msg.sender, "You are not Token owner!");

        for(uint i = 0; i < SaleTokenList.length; i++){
            if(SaleTokenList[i] == _tokenId){
                SaleTokenList[i] = SaleTokenList[SaleTokenList.length -1];
                SaleTokenList.pop();
                tokenPrices[_tokenId] = 0;
                return true;
            }
        }
        return false;
    }

    // 전체 판매리스트 확인
    function getSaleTokenList() public view returns(TokenInfo[] memory){
        require(SaleTokenList.length > 0, "empty token sale!");
        TokenInfo[] memory list = new TokenInfo[](SaleTokenList.length);

        for(uint i = 0; i < SaleTokenList.length; i++){
            uint tokenId = SaleTokenList[i];
            uint price = tokenPrices[tokenId];

            list[i] = TokenInfo(tokenId,price);
        }

        return list;
    }

    // 소유하고 있는 nft 보기
    function getOwnerToken(address _tokenOwner) public view returns (TokenInfo[] memory){
        uint balance = nft.balanceOf(_tokenOwner);
        require(balance != 0, "There is no NFT!");
        TokenInfo[] memory list = new TokenInfo[](balance);

        for(uint i = 0; i < balance; i++){
            uint tokenId = nft.tokenOfOwnerByIndex(_tokenOwner, i);
            uint price = tokenPrices[tokenId];

            list[i] = TokenInfo(tokenId,price);
        }

        return list;
    }

    // 소유하고 있는 제일 최신의 NFT를 보여주는 view함수 민팅했을때 바로 보여주기 위한 용도로 사용
    function getLatestToken(address _tokenOwner) public view returns (TokenInfo memory){
        uint balance = nft.balanceOf(_tokenOwner);
        uint tokenId = nft.tokenOfOwnerByIndex(_tokenOwner, balance-1);
        uint price = tokenPrices[tokenId];

        return TokenInfo(tokenId,price);
    }
}