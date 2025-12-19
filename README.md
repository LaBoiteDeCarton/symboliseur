# Symboliseur42 Token Project

This project contains the Symboliseur42 ERC20 token contract built with Hardhat. The token uses OpenZeppelin's ERC20 implementation and can be deployed on Ethereum testnets like Sepolia.

## Technical Choices & Rationale
1. Blockchain: Ethereum Sepolia Testnet
Why Ethereum? Most widely-used EVM chain, mature ERC-20 ecosystem, best documentation/tools.​

Why Sepolia? Official Ethereum testnet, no real funds needed, reliable faucets, Etherscan support. Avoids BSC/Base complexity for minimal project.

2. Standard: ERC-20 (OpenZeppelin)
Why ERC-20? Industry standard, wallet/DEX compatible (transfer, approve, transferFrom). Required by project ("ERC20 for ETH").​

Why OpenZeppelin? Battle-tested, audited, handles edge cases (overflows, zero-address). Minimal custom code = maximum security.​


## Contract Details

- **Name**: symboliseur42
- **Symbol**: SYM42
- **Type**: ERC20 Token
- **Initial Supply**: 1,000,000 tokens
- **Decimals**: 18 (standard ERC20)

## Setup

1. Install dependencies:
```shell
npm install
```

2. Compile the contracts:
```shell
npx hardhat compile
```

## Deployment

### Deploy to Sepolia Testnet

1. Configure your Hardhat network settings in `hardhat.config.js` with Sepolia RPC URL and your private key
2. Get Sepolia ETH from a faucet: https://sepoliafaucet.com/

### Deploy

```shell
npx hardhat ignition deploy ignition/modules/Lock.js --network sepolia
```

## Sepolia Testnet Information

- **Network Name**: Sepolia
- **RPC URL**: https://sepolia.infura.io/v3/YOUR_PROJECT_ID
- **Chain ID**: 11155111
- **Currency**: SepoliaETH
- **Block Explorer**: https://sepolia.etherscan.io/

## Token Features

The Symboliseur42 token includes standard ERC20 functionality:
- Transfer tokens between addresses
- Approve other addresses to spend your tokens
- Check balances and allowances
- Total supply tracking