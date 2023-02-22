/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getSecureRandomNumber } from "../primitives/getSecureRandom";
import { wordlist } from "./wordlist";

export async function newSecureWords(size: number = 6) {
    let words: string[] = [];
    for (let i = 0; i < size; i++) {
        words.push(wordlist[await getSecureRandomNumber(0, wordlist.length)]);
    }
    return words;
}