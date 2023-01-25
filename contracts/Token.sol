// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;
// 代币合约
contract Token {
    // 代币名称 string类型
    string public name = 'Hardhat Token';
    // 代币token string类型
    string public symbol = 'BT';
    // 固定发行量 unit256类型
    uint256 public totalSupply = 1000000;
    // 存储账户 address类型
    address public owner;
    // 账户余额 mapping地址映射
    mapping(address => uint256) balances;
    constructor() {
        // msg.sender是部署合约的账户的sender
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }
    // 转账
    function transfer(address to, uint256 amount) external {
        // 判断余额和转账数量的大小
        require(balances[msg.sender] >= amount, 'Not enough tokens');
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
    // 返回代币余额，只读函数
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}