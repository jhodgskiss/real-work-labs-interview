import { animate } from "../src/particle-chamber";

test('moves left, .....L, 1', () => {
    expect(animate('.....L', 1)).toMatchSnapshot();
});

test('moves left, negative, .....R, -1', () => {
    expect(animate('.....R', -1)).toMatchSnapshot();
});

test('moves right, R....., 2', () => {
    expect(animate('R.....', 2)).toMatchSnapshot();
});

test('moves right, L....., -2', () => {
    expect(animate('L.....', -2)).toMatchSnapshot();
});

test('multiple particles, R.LR.L, 1', () => {
    expect(animate('R.LR.L', 1)).toMatchSnapshot();
});

test('chamber length 1', () => {
    expect(animate('R', 1)).toMatchSnapshot();
});

test('chamber length 1, no particle', () => {
    expect(animate('.', 1)).toMatchSnapshot();
});

test('fast particles, R.LR.L, 20', () => {
    expect(animate('R.LR.L', 20)).toMatchSnapshot();
});

test('negative speeds, R.LR.L, -2', () => {
    expect(animate('R.LR.L', -2)).toMatchSnapshot();
});

test('no chamber length', () => {
    expect(animate('', 1)).toMatchSnapshot();
});

test('errors on 0 speeds', () => {
    expect(() => animate('..R..L.', 0)).toThrowErrorMatchingSnapshot();
});

test('errors on float speeds', () => {
    expect(() => animate('..R..L.', 1.1)).toThrowErrorMatchingSnapshot();
});

test('example 0, ..R...., 2',() => {
    expect(animate('..R....', 2)).toMatchSnapshot();
});

test('example 1, RR..LRL, 3',() => {
    expect(animate('RR..LRL', 3)).toMatchSnapshot();
});

test('example 2, LRLR.LRLR, 2',() => {
    expect(animate('LRLR.LRLR', 2)).toMatchSnapshot();
});

test('example 3, RLRLRLRLRL, 10',() => {
    expect(animate('RLRLRLRLRL', 10)).toMatchSnapshot();
});
