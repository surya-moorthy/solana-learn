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
     const publickey = new Publickey("your_wallet-address"); 
   
   ```
