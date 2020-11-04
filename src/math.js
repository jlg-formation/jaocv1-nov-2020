function getAngle(n, c) {
  return (n * (Math.PI * 2)) / c.nbr;
}

export function getPoint(n, c) {
  const angle = getAngle(n, c);
  return { x: c.cx + c.r * Math.cos(angle), y: c.cy + c.r * Math.sin(angle) };
}
