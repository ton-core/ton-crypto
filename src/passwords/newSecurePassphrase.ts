/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSecureWords } from "..";

export async function newSecurePassphrase(size: number = 6) {
    return (await newSecureWords(size)).join('-');
}