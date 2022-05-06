### Description

The smart contract "Treasure" allows to do bulk distribution of ethereum tokens.  
The “Treasure Smart Contract” allows you to easily distribute your tokens  
to multiple wallets/addresses in one transaction.  
It could help you to reduce the electricity, man-power, transaction fee, and gas requirements while  
transferring your ERC20 compatible tokens from one wallet to another.

***

### Instalalation

bash  
```yarn install```

### How to use

Open *scripts/deploys.js* and enter the required addresses separated by commas in the *users* field.  
Then open *scripts/verify.js* and enter the addresses again.  
Then proceed to the deploy process ->

### Deploying contract

```npx hardhat run scripts/deploy.js --network *select network*```

### Verify contract

```npx hardhat run scripts/verify.js --network *select network*```