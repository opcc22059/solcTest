const hardhat = require("hardhat");

async function main() {
    
    const Client = await hardhat.ethers.getContractFactory("Client");
  
    console.log("Deploying .....")
    const client = await Client.deploy();
    await client.deployed();
    console.log("Client Contract Address: " , client.address);
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  