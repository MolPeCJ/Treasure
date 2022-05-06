const network = hre.network.name;
const fs = require("fs");
const users = [];
const portions = [];

async function main() {
  const dir = "./networks/";
  const fileName = "Treasure_" + `${network}.json`;
  const data = JSON.parse(await fs.readFileSync(dir + fileName, { encoding: "utf8" }));

  try {
    await hre.run("verify:verify", {
      address: data.Treasure,
      constructorArguments: [users, portions],
      contract: "contracts/Treasure.sol:Treasure",
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
