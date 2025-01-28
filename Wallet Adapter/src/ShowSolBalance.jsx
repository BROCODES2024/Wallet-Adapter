import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState, useEffect } from "react";

export function ShowSolBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      if (wallet.publicKey) {
        try {
          const balance = await connection.getBalance(wallet.publicKey);
          setBalance(balance / LAMPORTS_PER_SOL);
        } catch (error) {
          console.error("Failed to fetch balance", error);
        }
      }
    }

    fetchBalance();
  }, [connection, wallet.publicKey]); // Fetch balance when wallet or connection changes

  if (!wallet.publicKey) {
    return <p>Please connect your wallet to see the balance.</p>;
  }

  return (
    <div>
      <p>SOL Balance: {balance !== null ? balance : "Loading..."}</p>
    </div>
  );
}
