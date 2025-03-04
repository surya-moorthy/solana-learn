import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import "dotenv/config";
try {
    const connection = new Connection("https://api.devnet.solana.com","confirmed");

const suppliedToPubkey = process.argv[2] || null

if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
  }
  
  const publickey = new PublicKey(suppliedToPubkey);

const sendersecretkey = getKeypairFromEnvironment("SECRET_KEY");

const topublickey = new PublicKey(sendersecretkey);

console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
  );

  const transaction = new Transaction();

  const amount = 5000;

  const SendSOLInstruction = SystemProgram.transfer({
    fromPubkey: publickey,
    toPubkey: topublickey,
    lamports:   amount
  })
  
  transaction.add(SendSOLInstruction);

  const signature = await sendAndConfirmTransaction(connection,transaction,[sendersecretkey,]);
  console.log(
    `💸 Finished! Sent ${amount} to the address ${topublickey}. `,
  );
  console.log(`Transaction signature is ${signature}!`);
}
catch(e) {
    console.log("Error:",e);
}