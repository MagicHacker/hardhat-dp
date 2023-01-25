// 部署
const { ethers } = require("hardhat");

async function main() {
  // 账户
  const [deployer] = await ethers.getSigners();
  console.warn("部署合约的账户:", deployer.address);
  console.warn("账户余额:", (await deployer.getBalance()).toString());
  // 合约对象
  const Token = await ethers.getContractFactory("Token");
  // 不熟
  const token = await Token.deploy();
  console.warn("合约地址:", token.address);
}

main().then(() => {
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
})