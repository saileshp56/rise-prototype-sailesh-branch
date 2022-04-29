
/* TBDs: 
 * 1) Support an optional passphrase also for keypair generation, 
 * for additional security of the paper wallet.
 * 2) Support Nirvana in the Wallet APIs once Nirvana support is added.
 */

const bip39 = require('bip39');

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

import {establishConnection} from './utilApi';

import os from 'os';
import fs from 'mz/fs';
import path from 'path';
import yaml from 'yaml';

/**
 * Generate a Keypair for the user and return the Public Key and mnemonic seed phrase.
 * User needs to save this seed phrase to recover this newly generated keypair.
 **/
export async function createKeypair(): Promise<string[]> {

  const { execSync } = require('child_process');

  const output = execSync('solana-keygen new --no-outfile --no-bip39-passphrase', { encoding: 'utf-8' });
  let lines = output.split('\n');

  const PUBKEY_LINE = 2;
  const PUBKEY_INDEX = 8;
  const SEEDPHRASE_LINE = 5;

  return [lines[PUBKEY_LINE].substring(PUBKEY_INDEX), lines[SEEDPHRASE_LINE]];
}

/**
 * Recover the  Keypair Object corresponding to the mnemonic seed phrase given by the user.
 **/
export async function recoverKeypair(mnemonic: string): Promise<Keypair> {

  const seed = await bip39.mnemonicToSeedSync(mnemonic);
  let a = new Uint8Array(seed.toJSON().data.slice(0,32));

  const key = Keypair.fromSeed(a);

  return key;
}

/**
 * Make a payment from a keypair to a destination keypair. Currently this function uses SOL - 
 * to be changed later to Nirvana (custom currency). 
 * ASSUMPTION: Minimum amount is 1 Nirvana.
 **/
export async function makePayment(fromKeypair: Keypair, toKeypair: Keypair, numNirvana: number, connection: Connection): Promise<void> {
  let transaction = new Transaction();

  transaction.add(
    SystemProgram.transfer({
      fromPubkey: fromKeypair.publicKey,
      toPubkey: toKeypair.publicKey,
      lamports: LAMPORTS_PER_SOL*numNirvana //Assumption: Minimum payment is 1 Nirvana.
    })
  );

//  let connection = await establishConnection();

  await sendAndConfirmTransaction(
    connection,
    transaction,
    [fromKeypair]
  );
}
