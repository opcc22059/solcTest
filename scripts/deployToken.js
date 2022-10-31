const hardhat = require("hardhat");

const net = process.env.HARDHAT_NETWORK
const v = process.argv
const name = v[2];
const symbol = v[3];
const decimal = v[4];

async function main() {
    
    const Token = await hardhat.ethers.getContractFactory("TestToken");
  
    console.log("Deploying .....")
    const token = await Token.deploy(name, symbol, decimal);
    await token.deployed();
    console.log("Token Contract Address: " , token.address);
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  