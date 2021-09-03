import { mnemonicValidate } from "./mnemonic";

describe('mnemonic', () => {
    it('should validate mnemonics', async () => {
        expect(await mnemonicValidate(['a'])).toBe(false);
        expect(await mnemonicValidate([
            'hospital', 'stove', 'relief', 'fringe', 'tongue', 'always', 'charge', 'angry', 'urge',
            'sentence', 'again', 'match', 'nerve', 'inquiry', 'senior', 'coconut', 'label', 'tumble',
            'carry', 'category', 'beauty', 'bean', 'road', 'solution'])
        ).toBe(true);
    });
});