import repl from 'repl';
import { animate } from "./src/particle-chamber";
import { getUnusedCharacters } from "./src/unused-letters";

const r = repl.start();

Object.defineProperty(r.context, "animate", {
    configurable: false,
    enumerable: true,
    value: animate,
});

Object.defineProperty(r.context, "getUnusedCharacters", {
    configurable: false,
    enumerable: true,
    value: getUnusedCharacters,
});
