const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const unlockTime = Math.floor(Date.now() / 1000) + 3600; // Set unlock time 1 hour from now
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime);

  await lock.deployed();

  console.log("Lock contract deployed to address:", lock.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
