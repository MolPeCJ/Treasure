const network = hre.network.name;
const fs = require('fs');
const users = [
  '0xddacF850692b1e284Fd585191101b272E1608Fb5', 
  '0xC480B32B4f6354B1479524114d6b284B57D81117', 
  '0xEA1615176598F531BD614BDf0Bbd0BadDca46a49'
];
const portions = [33, 33, 33];

async function main() {
  const namesAndAddresses = {};
  const [deployer] = await hre.ethers.getSigners();

  const TreasureInstance = await ethers.getContractFactory('Treasure');
  const Treasure = await TreasureInstance.deploy(users, portions);

  console.log('Network', network);
  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Account balance:', (await deployer.getBalance()).toString());

  console.log(`Smart contract has been deployed to: ${Treasure.address}`);

  namesAndAddresses.Treasure = Treasure.address;

  const data = await JSON.stringify(namesAndAddresses, null, 2);
  const dir = './networks/';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const fileName = 'Treasure_' + `${network}.json`;

  await fs.writeFileSync(dir + fileName, data, { encoding: 'utf8' });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });