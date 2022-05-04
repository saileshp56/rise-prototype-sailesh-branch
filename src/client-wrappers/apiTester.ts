
import {
  Keypair,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  clusterApiUrl,
  TransactionInstruction,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

import { disburseUbiToUser, getWalletBalance } from './ubiApi';
import { createKeypair, recoverKeypair, makePayment } from './walletApi';
import { getRpcUrl, establishConnection } from './utilApi';

import os from 'os';
//import fs from 'mz/fs';
import path from 'path';
import yaml from 'yaml';

async function main() {
  console.log("Testing the RISE Wallet APIs...")

  // Establish connection to the cluster (defaulting to the devnet endpoint currently).
  let connection = await establishConnection();

  console.log("\nGenerating random seedphrase and corresponding keypair...");

  const result: string[] = [];

  await createKeypair().catch((error: Error) => {
    throw new Error(error.message);
  })
    .then((outputs: string[]) => {
      result.length = 0;
      return outputs.forEach((item, i) => {
        result[i] = item;
      });
    });

  console.log('PUBLIC KEY: ', result[0]); // This is the Public Key.
  console.log('SEED PHRASE: ', result[1]); // This is the mnemonic seed phrase.

  console.log("\nRecovering Keypair from seedphrase...");

  let fromKeypair: Keypair;

  fromKeypair = await recoverKeypair(result[1]).catch((error: Error) => {
    throw new Error(error.message);
  })
    .then((recKeypair: Keypair) => {
      console.log("REGENERATED PUBLIC KEY: ", recKeypair.publicKey.toBase58());
      return recKeypair;

    });

  console.log("\nMaking a payment from this keypair to another keypair...");

  let toKeypair = Keypair.generate(); //Generate a dummy account to make payment to.

  let prevBalance1 = await getWalletBalance(fromKeypair.publicKey.toString(), connection)
  let prevBalance2 = await getWalletBalance(toKeypair.publicKey.toString(), connection)

  console.log("\nPrevious balance of payer: ", prevBalance1, " Nirvana")
  console.log("Previous balance of payee: ", prevBalance2, " Nirvana")

  console.log("\nFirst disbursing an income of 2 Nirvana to payer account"); // 2 seems to be the max limit for devnet.
  await disburseUbiToUser(fromKeypair.publicKey.toString(), 2, connection);

  prevBalance1 = await getWalletBalance(fromKeypair.publicKey.toString(), connection)
  console.log("Current balance of payer: ", prevBalance1, " Nirvana")

  console.log("\nNext, paying 1 Nirvana to payee (public key: ", toKeypair.publicKey.toString(), ")")
  await makePayment(fromKeypair, toKeypair, 1, connection);

  let newBalance1 = await getWalletBalance(fromKeypair.publicKey.toString(), connection)
  let newBalance2 = await getWalletBalance(toKeypair.publicKey.toString(), connection)

  console.log("\nNew balance of payer: ", newBalance1, " Nirvana")
  console.log("New balance of payee: ", newBalance2, " Nirvana")

  console.log("\nAPI TESTING ENDS.");
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
