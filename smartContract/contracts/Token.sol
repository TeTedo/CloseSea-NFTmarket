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
        uint tokenAmount = msg.value * rate;
        _transfer(address(this), msg.sender, tokenAmount);
    }
    // 토큰 판매
    function sellToken(uint256 _amount) public payable{
        require(_amount != 0, "To small amount!");
        uint etherAmount = _amount/rate;
        require(address(this).balance >= etherAmount, "There is no ETH in contract");
        _transfer(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
    }
    // 토큰 전송
    function transferToken(address _to, uint256 _amount) public{
        _transfer(msg.sender, _to, _amount);
    }
    // 가격 변환 함수
}