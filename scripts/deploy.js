// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through 'node <script>'.
// When running the script with 'npx hardhat run <script>' you'll find the Hardhat
// Runtime Environment's members are available in the global scope.

const { ethers } = require("hardhat");

async function main() {
  try {
    const Greeter = await ethers.getContractFactory("Greeter");
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const greeter = await Greeter.deploy("Hello, Hardhat!");
    await greeter.deployed();

    console.log("Greeter deployed to:", greeter.address);
  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exit(1);
  }
}

// Execute the deployment script
main().then(() => process.exit(0));



// const {ethers} = require("hardhat");
 
// async function main() {
//   const Greeter = await ethers.getContractFactory("Greeter");
//   const [deployer] = await ethers.getSigners();
//   console.log(
//       "Deploying contracts with the account:", 
//       deployer.address
//       );
//   const greeter = await Greeter.deploy("Hello, Hardhat!");
 
//   await greeter.deployed();
//   // console.log(Greet)
//   console.log("Greeter deployed to:", await greeter.address());
// }
 
// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });


// const { ethers } = require("hardhat");

// async function main() {
//   const [deployer] = await ethers.getSigners();

//   console.log("Deploying contracts with the account:", deployer.address);

//   const unlockTime = Math.floor(Date.now() / 1000) + 3600; // Set unlock time 1 hour from now
//   const Lock = await ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime);

//   await lock.deployed();

//   console.log("Lock contract deployed to address:", lock.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
// });
