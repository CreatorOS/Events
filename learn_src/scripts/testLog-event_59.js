// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');
const BN = require('bn.js');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [deployer] = await ethers.getSigners();
  const ContractFactory = await hre.ethers.getContractFactory('Event');
  const contract = await ContractFactory.deploy();

  await contract.deployed();
  console.log('Event Contract deployed to:', contract.address);

  contract.on('Log', (address, msg) => {
    console.log(address, msg);
    if (address === deployer.address && msg === 'Hello World!') {
      console.log('test passed');
      process.exit(0);
    } else {
      console.log('test failed');
      process.exit(1);
    }
  });

  try {
    console.log(`Calling test()`);
    await contract.test();
  } catch (e) {
    console.error(e);
    if (e.message.includes('Not owner')) {
      console.log('test passed');
      process.exit(0);
    } else {
      console.log('test failed');
      process.exit(1);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => {
    setTimeout(() => {
      console.log('test failed');
      process.exit(1);
    }, 6000);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
