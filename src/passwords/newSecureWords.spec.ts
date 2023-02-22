/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSecureWords } from "..";

describe('newSecurePassword', () => {
    it('should generate password', async () => {
        let pass = await newSecureWords();
        expect(pass.length).toBe(6);
    })
});