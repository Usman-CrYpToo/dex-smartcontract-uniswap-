require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    hardhat :{
       forking:{
        url : "https://eth-mainnet.g.alchemy.com/v2/XGitKcH9ElfnyLE8qzhY-4Xaf0qgVmtf"
       }
    }
  }
};
