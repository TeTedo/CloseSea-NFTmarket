const NftToken = artifacts.require("NftToken");
const NftTrade = artifacts.require("NftTrade");
const Token = artifacts.require("Token");

module.exports = async (deployer) => {
  await deployer.deploy(Token);
  const token = await Token.deployed();
  await deployer.deploy(NftToken, "nftName", "nftSym", 5, 100, token.address);
  const nft = await EthSwap.deployed();
  await deployer.deploy(NftTrade, token.address, nft.address);
};

//  npx ganache-cli --chainId 7722 --networkId 7722
