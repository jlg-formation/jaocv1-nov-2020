import { Config } from "./Config";
import { init, sync } from "./multiplication";

function main() {
  const c: Config = {
    r: 200,
    cx: 400,
    cy: 250,
    nbr: 500,
    multi: 2,
    showText: true,
  };
  init(c);
  sync(c);
}

main();
