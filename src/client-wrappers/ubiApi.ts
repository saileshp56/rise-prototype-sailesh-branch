
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

import os from 'os';
import fs from 'mz/fs';
import path from 'path';
import yaml from 'yaml';


/**
 * Dummy placeholder function for disbursing UBI to a user.
 * Dummy implementation just invokes airdrop of 100 SOL when the
 * function is called. Actual UBI disbursement design is in-progess.
 **/
export async function disburseUbiToUser(publicKeyStr: string, numNirvana: number, connection: Connection): Promise<void> {

  const publicKey = new PublicKey(publicKeyStr)
  const prevLamports = await connection.getBalance(publicKey);

  let fees = 0;
  const {feeCalculator} = await connection.getRecentBlockhash();

  // Factor-in rent for 2 years.
  fees += await connection.getMinimumBalanceForRentExemption(0); // Data size = 0

  // Calculate the cost of sending transactions.
  fees += feeCalculator.lamportsPerSignature * 100; // wag

  let lamports = numNirvana * LAMPORTS_PER_SOL
  const sig = await connection.requestAirdrop(
    publicKey,
    //lamports+fees, // TBD - fees needs to be accounted for in final implementation.
    lamports
  );

  await connection.confirmTransaction(sig);

  const newLamports = await connection.getBalance(publicKey);

  /*
  var assert = require('assert')
  assert(prevLamports + lamports == newLamports) // TBD: replace assert with proper error handling!
  */
}

/**
 * Check the wallet balance.
 * Return value is in Nirvana (currently SOL).
 **/
export async function getWalletBalance(publicKeyStr: string, connection: Connection): Promise<number> {
  const publicKey = new PublicKey(publicKeyStr);
  const lamports = await connection.getBalance(publicKey);
  
  return lamports/LAMPORTS_PER_SOL;
}
