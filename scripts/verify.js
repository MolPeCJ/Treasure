const network = hre.network.name;
const fs = require("fs");
const users = [
  '0xddacF850692b1e284Fd585191101b272E1608Fb5', 
  '0xC480B32B4f6354B1479524114d6b284B57D81117', 
  '0xEA1615176598F531BD614BDf0Bbd0BadDca46a49'
];
const portions = [33, 33, 33];

async function main() {
  const dir = "./networks/";
  const fileName = "Treasure_" + `${network}.json`;
  const data = JSON.parse(await fs.readFileSync(dir + fileName, { encoding: "utf8" }));

  try {
    await hre.run("verify:verify", {
      address: data.Treasure,
      constructorArguments: [users, portions],
      contract: "contracts/Contract.sol:Treasure",
    });
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
