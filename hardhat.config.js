require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    // Uncomment and configure the following if deploying to a testnet or mainnet
    // rinkeby: {
    //   url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    //   accounts: ["YOUR_PRIVATE_KEY"]
    // }
  }
};