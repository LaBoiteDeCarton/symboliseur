# Projet Token Symboliseur42

Ce projet contient le contrat de token ERC20 Symboliseur42 construit avec Hardhat. Le token utilise l'implémentation ERC20 d'OpenZeppelin et peut être déployé sur les testnets Ethereum comme Sepolia.

## Choix Techniques & Justifications
1. Blockchain : Ethereum Sepolia Testnet
Pourquoi Ethereum ? Chaîne EVM la plus utilisée, écosystème ERC-20 mature, meilleure documentation/outils.​

Pourquoi Sepolia ? Testnet officiel Ethereum, pas de vrais fonds nécessaires, faucets fiables, support Etherscan.

2. Standard : ERC-20 (OpenZeppelin)
Pourquoi ERC-20 ? Standard de l'industrie. Requis par le projet ("ERC20 for ETH").​


## Détails du Contrat

- **Nom**: symboliseur42
- **Symbole**: SYM42
- **Type**: Token ERC20
- **Supply Initial**: 1 000 000 tokens
- **Décimales**: 18 (standard ERC20)

## Installation

1. Installer les dépendances :
```shell
npm install
```

2. Compiler les contrats :
```shell
npx hardhat compile
```

## Déploiement

### Déployer sur le Testnet Sepolia

1. Configurer les paramètres réseau Hardhat dans `hardhat.config.js` avec l'URL RPC Sepolia et votre clé privée
2. Obtenir de l'ETH Sepolia depuis un faucet : https://sepoliafaucet.com/

### Déployer

```shell
npx hardhat ignition deploy ignition/modules/Lock.js --network sepolia
```

## Informations Testnet Sepolia

- **Nom du Réseau**: Sepolia
- **URL RPC**: https://sepolia.infura.io/v3/YOUR_PROJECT_ID
- **Chain ID**: 11155111
- **Devise**: SepoliaETH
- **Explorateur de Blocs**: https://sepolia.etherscan.io/

## Fonctionnalités du Token

Le token Symboliseur42 inclut les fonctionnalités ERC20 standard :
- Transférer des tokens entre adresses
- Approuver d'autres adresses à dépenser vos tokens
- Vérifier les soldes et les autorisations
- Suivi de l'offre totale