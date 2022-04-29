declare module 'bip39'{
export function mnemonicToSeed(mnemonic: string, passwd: string): Uint8Array;
}
