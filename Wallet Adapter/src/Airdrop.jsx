import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");

  async function requestAirdrop() {
    if (!wallet.publicKey) {
      alert("Please connect your wallet first!");
      return;
    }

    try {
      const airdropSignature = await connection.requestAirdrop(
        wallet.publicKey,
        parseFloat(amount) * LAMPORTS_PER_SOL
      );
      await connection.confirmTransaction(airdropSignature);
      alert(`Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
    } catch (error) {
      console.error("Airdrop failed", error);
      alert("Airdrop failed!");
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  );
}
