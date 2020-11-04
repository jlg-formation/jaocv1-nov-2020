import { Point } from "./Point";

function getAngle(n: number, c: Config) {
  return (n * (Math.PI * 2)) / c.nbr;
}

export function getPoint(n: number, c: Config): Point {
  const angle = getAngle(n, c);
  return { x: c.cx + c.r * Math.cos(angle), y: c.cy + c.r * Math.sin(angle) };
}
