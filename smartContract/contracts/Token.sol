// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20{
    string public _name = "TokenName";
    string public _symbol = "TokenSymbol";
    uint public _totalSupply = 20000000 * (10**decimals());
    uint public rate = 1000;
    address public operator;

    constructor() ERC20(_name,_symbol){
        operator = msg.sender;
        _mint(address(this), _totalSupply);
    }

    // CA에 이더 받았을때
    receive() external payable{
        require(msg.value != 0, "To small amount!");
        uint tokenAmount = msg.value * rate;
        require(balanceOf(address(this)) >= tokenAmount);
        _transfer(address(this), msg.sender, tokenAmount);
    }

    // 토큰 구매
    function buyToken() public payable{
        require(msg.value != 0, "To small amount!");
        uint tokenAmount = msg.value * rate * 95 / 100;
        _transfer(address(this), msg.sender, tokenAmount);
    }
    // 토큰 판매
    function sellToken(uint256 _amount) public payable{
        require(_amount != 0, "To small amount!");
        uint etherAmount = _amount / rate * 95 / 100;
        require(address(this).balance >= etherAmount, "There is no ETH in contract");
        _transfer(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
    }

    // nft민팅할때 함수
    function mintNft(uint _mintPrice, uint _mintAmount) public {
        _transfer(msg.sender, address(this), _mintPrice * _mintAmount);
    }

    // get CA
    function getCoinCA() external view returns(address){
        return address(this);
    }

    // 토큰 수량 확인
    function checkCoinBalance(address _address) public view returns(uint256) {
        return balanceOf(_address);
    }
    // 가격 변환 함수
}