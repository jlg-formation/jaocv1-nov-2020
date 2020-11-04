import { init, sync } from "./multiplication.js";

function main() {
  const c = {
    r: 200,
    cx: 400,
    cy: 250,
    nbr: 500,
    multi: 40,
    showText: true,
  };
  init(c);
  sync(c);
}

main();
