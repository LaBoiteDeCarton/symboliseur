# Guide d'Utilisation du Token Symboliseur42 avec MetaMask

## Vue d'ensemble

Le token Symboliseur42 (SYM42) est un token ERC20 déployé sur le testnet Ethereum Sepolia. Ce guide vous explique comment interagir avec le token en utilisant MetaMask.

## Prérequis

1. **MetaMask installé** dans votre navigateur
2. **Compte MetaMask configuré** avec une clé privée
3. **ETH Sepolia** pour les frais de transaction (disponible via faucets)

## Configuration de MetaMask pour Sepolia

### Étape 1 : Ajouter le réseau Sepolia

1. Ouvrez MetaMask
2. Cliquez sur le sélecteur de réseau (en haut)
3. Cliquez sur "Ajouter un réseau"
4. Entrez les informations suivantes :

```
Nom du réseau : Sepolia
URL RPC : https://sepolia.infura.io/v3/YOUR_PROJECT_ID
ID de chaîne : 11155111
Symbole de devise : SepoliaETH
URL de l'explorateur de blocs : https://sepolia.etherscan.io/
```

### Étape 2 : Obtenir des ETH Sepolia

1. Allez sur un faucet Sepolia : https://sepoliafaucet.com/
2. Entrez votre adresse MetaMask
3. Récupérez des ETH de test (nécessaires pour les frais de gas)

## Ajouter le Token Symboliseur42 à MetaMask

### Méthode 1 : Ajout manuel

1. Dans MetaMask, allez dans l'onglet "Tokens"
2. Cliquez sur "Importer des tokens"
3. Sélectionnez "Token personnalisé"
4. Entrez les informations du contrat :

```
Adresse du contrat : [ADRESSE_DU_CONTRAT_DÉPLOYÉ]
Symbole du token : SYM42
Décimales : 18
```

### Méthode 2 : Ajout via Etherscan

1. Allez sur https://sepolia.etherscan.io/
2. Recherchez l'adresse de votre contrat déployé
3. Cliquez sur l'onglet "Contract"
4. Utilisez le bouton "Add to MetaMask"

## Interactions Possibles avec le Token

### 1. Vérifier votre Solde

- Votre solde SYM42 s'affiche automatiquement dans MetaMask une fois le token ajouté
- Le créateur du contrat reçoit tous les tokens lors du déploiement (1,000,000 SYM42)

### 2. Transférer des Tokens

**Via MetaMask :**
1. Sélectionnez le token SYM42
2. Cliquez sur "Envoyer"
3. Entrez l'adresse du destinataire
4. Entrez la quantité à envoyer
5. Confirmez la transaction

### 3. Approuver une Dépense (Allowance)

**Via Etherscan :**
1. Allez sur la page du contrat sur Sepolia Etherscan
2. Connectez votre wallet (MetaMask)
3. Utilisez la fonction `approve(spender, amount)`

**Paramètres :**
- `spender` : Adresse autorisée à dépenser vos tokens
- `amount` : Montant autorisé (en wei, donc 1 token = 1000000000000000000)

### 4. Vérifier les Autorisations

**Fonction `allowance` :**
- `owner` : Votre adresse
- `spender` : Adresse dont vous voulez vérifier l'autorisation

## Exemples d'Exécution MetaMask

### Exemple 1 : Transférer 100 SYM42

```
1. Ouvrez MetaMask
2. Sélectionnez le réseau Sepolia
3. Cliquez sur SYM42 dans votre liste de tokens
4. Cliquez "Envoyer"
5. Destinataire : 0x742C...5678 (exemple)
6. Montant : 100
7. Frais estimés : ~0.001 SepoliaETH
8. Confirmez la transaction
9. Attendez la confirmation (1-2 minutes)
```

### Exemple 2 : Approuver 500 SYM42 pour une DApp

```
1. Connectez MetaMask à https://sepolia.etherscan.io/
2. Naviguez vers votre contrat SYM42
3. Onglet "Contract" → "Write Contract"
4. Fonction "approve"
5. spender : 0xDApp...Address
6. amount : 500000000000000000000 (500 * 10^18)
7. Cliquez "Write" 
8. Confirmez dans MetaMask
9. Transaction confirmée = Autorisation accordée
```

## Limitations Actuelles

⚠️ **Important** : Le contrat Symboliseur42 actuel est un ERC20 basique :

### ✅ Ce que vous POUVEZ faire :
- Transférer des tokens entre adresses
- Approuver des dépenses pour des contrats/utilisateurs
- Vérifier les soldes et autorisations
- Voir l'historique des transactions

## Trading et Liquidité

Pour échanger SYM42 contre ETH, vous devrez :

1. **Utiliser une DEX** comme Uniswap (créer une paire SYM42/ETH)
2. **Développer un contrat d'échange** avec fonctions buy/sell
3. **Créer un marché OTC** (over-the-counter) manuel

## Monitoring et Vérification

### Vérifier les Transactions
- **Etherscan Sepolia** : https://sepolia.etherscan.io/
- Recherchez votre adresse ou l'adresse du contrat
- Consultez l'historique des transferts SYM42

## Dépannage Common Issues

### Transaction Failed
- Vérifiez que vous avez assez d'ETH Sepolia pour les gas
- Augmentez les gas fees si le réseau est congestionné

### Token Not Visible
- Vérifiez l'adresse du contrat
- Assurez-vous d'être sur le bon réseau (Sepolia)
- Rafraîchissez MetaMask

### Slow Transactions
- Le testnet Sepolia peut être lent
- Attendez 2-5 minutes pour la confirmation
- Vérifiez le statut sur Etherscan
