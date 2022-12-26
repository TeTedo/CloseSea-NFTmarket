// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../@openzeppelin/contracts/access/Ownable.sol";
contract Token is ERC20, Ownable{
    string public _name = "ZOLLA";
    string public _symbol = "ZOL";
    uint public _totalSupply = 20000000 * (10**decimals());
    uint public ethCanBuy = 1000;
    constructor() ERC20(_name,_symbol){
        _mint(address(this), _totalSupply);
    }

    // CA에 이더 받았을때
    receive() external payable{
        require(msg.value != 0, "To small amount!");
        uint amount = msg.value * ethCanBuy * 95 / 100;
        require(balanceOf(address(this)) >= amount);
        _transfer(address(this),msg.sender, amount);
    }

    // 토큰 구매
    function buyToken() public payable {
        uint tokenAmount = msg.value * ethCanBuy * 95 / 100;
        require(balanceOf(address(this)) >=tokenAmount,"There is no more Token");
        _transfer(address(this), msg.sender, tokenAmount);
        _transfer(address(this), owner(), msg.value * ethCanBuy * 5 / 100);
    }
    // 토큰 판매
    function sellToken(uint256 _amount) public payable{
        require(balanceOf(msg.sender) >= _amount);
        uint etherAmount = _amount / ethCanBuy * 95 / 100;
        require(balanceOf(address(this)) >= etherAmount);
        _transfer(msg.sender,address(this),_amount);
        payable(msg.sender).transfer(etherAmount);
    }
    // nft민팅할때 함수
    function mintNft(address _address, uint _price) external {
        _transfer(_address, owner(), _price);
    }

    // get CA
    function getCoinCA() external view returns(address){
        return address(this);
    }

    // 토큰 수량 확인
    function checkCoinBalance(address _address) public view returns(uint256) {
        return balanceOf(_address);
    }
}