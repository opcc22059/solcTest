const hardhat = require("hardhat");

async function main() {
    
    const Server = await hardhat.ethers.getContractFactory("Server");
  
    console.log("Deploying .....")
    const server = await Server.deploy();
    await server.deployed();
    console.log("Server Contract Address: " , server.address);
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  