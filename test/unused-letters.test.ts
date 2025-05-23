import { getUnusedCharacters } from "../src/unused-letters";

test('example 0',() => {
    expect(getUnusedCharacters("A slow yellow fox crawls under the proactive dog")).toMatchSnapshot();
});

test('example 1', () => {
    expect(getUnusedCharacters("A quick brown fox jumps over the lazy dog")).toMatchSnapshot();
});

test('empty string', () => {
    const alphabet = Array(26)
        .fill('')
        .map((_,index) => String.fromCharCode('a'.charCodeAt(0) + index)).join('');
    expect(getUnusedCharacters('')).toMatch(alphabet); // sanity check
    expect(getUnusedCharacters('')).toMatchSnapshot();
});

test('capital letters', () => {
    expect(getUnusedCharacters("ABCDEF")).toMatchSnapshot();
});
