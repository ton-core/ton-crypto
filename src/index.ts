/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export { sha256, sha256_sync } from './primitives/sha256';
export { sha512, sha512_sync } from './primitives/sha512';

export { pbkdf2_sha512 } from './primitives/pbkdf2_sha512';

export { hmac_sha512 } from './primitives/hmac_sha512';

export { getSecureRandomBytes, getSecureRandomWords, getSecureRandomNumber } from './primitives/getSecureRandom';
export { newSecureWords } from './passwords/newSecureWords';
export { newSecurePassphrase } from './passwords/newSecurePassphrase';

export { KeyPair } from './primitives/nacl';

export { mnemonicNew, mnemonicValidate, mnemonicToPrivateKey, mnemonicToWalletKey, mnemonicToSeed, mnemonicToHDSeed } from './mnemonic/mnemonic';
export { wordlist as mnemonicWordList } from './mnemonic/wordlist';

export { sealBox, openBox } from './primitives/nacl';
export { keyPairFromSeed, keyPairFromSecretKey, sign, signVerify } from './primitives/nacl';

export { HDKeysState } from './hd/state';
export { getED25519MasterKeyFromSeed, deriveED25519HardenedKey, deriveEd25519Path } from './hd/ed25519';
export { getSymmetricMasterKeyFromSeed, deriveSymmetricHardenedKey, deriveSymmetricPath } from './hd/symmetric';
export { deriveMnemonicsPath, deriveMnemonicHardenedKey, getMnemonicsMasterKeyFromSeed } from './hd/mnemonics';