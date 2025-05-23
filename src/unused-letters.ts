const _CHARACTER_SET = 'abcdefghijklmnopqrstuvwxyz';
const _CHARACTERS = new Set(Array.from(_CHARACTER_SET));

export function getUnusedCharacters(string: string): string {
    const usedCharacterSet = new Set(Array.from(string.toLowerCase()));
    const unusedCharacters = _CHARACTERS.difference(usedCharacterSet);
    return Array.from(unusedCharacters).join('');
}
