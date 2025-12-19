const hre = require("hardhat");

async function main() {
  const { ethers } = hre;

  // ethers v6: no .utils
  const initialSupply = ethers.parseUnits("1000000", 18);

  const Symboliseur42 = await ethers.getContractFactory("Symboliseur42");
  const token = await Symboliseur42.deploy(initialSupply);

  // ethers v6: waitForDeployment + getAddress
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("Symboliseur42 deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});