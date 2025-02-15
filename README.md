# Solana Wallet DApp

## Overview
This is a decentralized web application (DApp) built on the Solana blockchain that allows users to interact with their Solana wallets. Users can request airdrops, send tokens, check their SOL balance, and sign messages using their connected wallets.

## Features
- **Request Airdrop**: Users can request free SOL tokens on the Devnet.
- **Check SOL Balance**: Users can view their current SOL balance.
- **Send Tokens**: Users can transfer SOL tokens to another wallet.
- **Sign Messages**: Users can digitally sign messages using their wallet.
- **Wallet Integration**: Supports Solana-compatible wallets like Phantom, Solflare, etc.

## Technologies Used
- **Solana Blockchain**
- **React.js**
- **Solana Wallet Adapter**
- **Solana Web3.js**
- **JavaScript**

## Prerequisites
Before running the application, ensure you have the following installed:
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**
- **A Solana wallet** (e.g., Phantom, Solflare)

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/yourusername/solana-wallet-dapp.git
cd solana-wallet-dapp
```

### Install Dependencies
```bash
npm install
```

### Start the Application
```bash
npm start
```
This will launch the DApp on `http://localhost:3000/`.

## How to Use
1. **Connect Your Wallet**: Click the `Connect Wallet` button to link your Solana wallet.
2. **Request Airdrop**: Enter the amount of SOL you want and click `Request Airdrop` (only works on Devnet).
3. **Check Balance**: Your SOL balance is displayed after connecting your wallet.
4. **Send SOL Tokens**: Enter a recipient wallet address and the amount, then click `Send`.
5. **Sign a Message**: Enter a message and sign it using your wallet.
6. **Disconnect Wallet**: Click `Disconnect` when done.

## Folder Structure
```
solana-wallet-dapp/
│── src/
│   ├── components/
│   │   ├── Airdrop.js
│   │   ├── SendTokens.js
│   │   ├── ShowSolBalance.js
│   │   ├── SignMessage.js
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md
```

## Deployment
To deploy your application:
```bash
npm run build
```
Then, you can deploy the generated `build/` folder to platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

## Notes
- This DApp is configured to run on Solana **Devnet**. To use it on **Mainnet**, modify the network settings in `App.js`.
- Ensure that you are using a **Solana-compatible wallet** like Phantom.

## License
This project is licensed under the MIT License.

## Contact
For any issues or contributions, feel free to open an issue on GitHub or contact the maintainer.

