// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20{
    string public _name = "TokenName";
    string public _symbol = "TokenSymbol";
    uint public _totalSupply = 20000000 * (10**decimals());
    uint public ethCanBuy = 1000;
    address public owner;
    constructor() ERC20(_name,_symbol){
        owner = msg.sender;
        _mint(msg.sender, _totalSupply);
    }

    // CA에 이더 받았을때
    receive() external payable{
        require(msg.value != 0, "To small amount!");
        uint amount = msg.value * ethCanBuy;
        require(balanceOf(owner) >= amount);
        _transfer(msg.sender,owner, msg.value);
    }

    // 토큰 구매
    function buyToken() public payable{
        uint tokenAmount = msg.value * ethCanBuy;
        require(balanceOf(owner) >=tokenAmount,"There is no more Token");
        _transfer(owner, msg.sender, tokenAmount);
    }
    // 토큰 판매
    function sellToken(uint256 _amount) public payable{
        require(balanceOf(msg.sender) >= _amount);
        uint etherAmount = _amount/ethCanBuy;
        require(balanceOf(owner) >= etherAmount);
        _transfer(msg.sender,owner,_amount);
        payable(msg.sender).transfer(etherAmount);
    }
    // 가격 변환 함수
    
}