# Solana Learn
## keyPair and connection
   - we used @solana/web3.js library to generate a key pair with a public key and a secret key
   ```
       const keypair = Keypair.generate();

       console.log(`The public key is: `, keypair.publicKey.toBase58());
       console.log(`The secret key is: `, keypair.secretKey);
   ```
   - To make a solana connection into the solana network , use connection object to connect whichever network we want to connect
   for that we use different networks called Clusters to connect in solana 

   ```
      const connection = new Connection(clusterApiurl("devnet" | "mainnet" | "tesnet"));
   
   ``
## Public key and Transactions
   - we provide public key either from keypair that is generated or use Publickey constructor to create a public in the form Uint8Array from the given address of the user.
   ```
<<<<<<< HEAD
     const publickey = new Publickey("your_wallet-address"); 
   
   ```
=======
     const publickey = new Publickey("your_wallet-address");  
   ```
   - Transaction are a set of instruction that invoke solana, they are atomic , like either all the instructions are succeed or failed.
   ### Creating a Transaction
   ```
     const transaction = new Transaction();

     const someInstruction;

     transaction.add(someInstruction)
   ```
   To verfiy the transaction , we use connected and the transaction the take on the transaction happened
   ```
     const signature = await sendAndConfirmTransaction(connection,transaction,[sendersecretkey,]);
   ```
>>>>>>> b7a4f0b (some more readme added)
