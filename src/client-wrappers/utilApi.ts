/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import os from 'os';
//import fs from 'mz/fs';
import path from 'path';
import yaml from 'yaml';
import { Keypair, Connection } from '@solana/web3.js';

/**
 * @private
 */
async function getConfig(): Promise<any> {
  // Path to Solana CLI config file
  const CONFIG_FILE_PATH = path.resolve(
    os.homedir(),
    '.config',
    'solana',
    'cli',
    'config.yml',
  );
  /*const configYml = await fs.readFile(CONFIG_FILE_PATH, {encoding: 'utf8'});
  return yaml.parse(configYml);*/
}

/**
 * Load and parse the Solana CLI config file to determine which RPC url to use.
 */
export async function getRpcUrl(): Promise<string> {
  try {
    const config = await getConfig();
    if (!config.json_rpc_url) throw new Error('Missing RPC URL');
    //return config.json_rpc_url; //TBD - remove hardcoding later!
    return 'https://api.devnet.solana.com';
  } catch (err) {
    console.warn(
      'Failed to read RPC url from CLI config file, falling back to localhost',
    );
    //return 'http://127.0.0.1:8899';
    return 'https://api.devnet.solana.com'; //TBD - remove hardcoding later!
  }
}

/**
 * Establish a connection to the cluster.
 */
export async function establishConnection(): Promise<Connection> {
  const rpcUrl = await getRpcUrl();
  console.log("RPC URL is: ", rpcUrl);
  let connection = new Connection(rpcUrl, 'confirmed');
  const version = await connection.getVersion();
  console.log('Connection to cluster established:', rpcUrl, version);

  return connection
}

