// 合约测试用例
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Token合约", function () {
    it("部署合约应该指定账户的totalSupply", async function () {
        // 获取账户
        const [owner] = await ethers.getSigners();
        // 获取Token
        const Token = await ethers.getContractFactory("Token");
        // 部署
        const hardhatToken = await Token.deploy();
        // 所有者账户余额
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        // 断言
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })
})