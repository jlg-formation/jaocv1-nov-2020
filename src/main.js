const SVGNS = "http://www.w3.org/2000/svg";

function getAngle(n, c) {
  return (n * (Math.PI * 2)) / c.nbr;
}

function getPoint(n, c) {
  const angle = getAngle(n, c);
  return { x: c.cx + c.r * Math.cos(angle), y: c.cy + c.r * Math.sin(angle) };
}

function addSmallCircles(c) {
  const svg = document.querySelector("svg");
  for (let i = 0; i < c.nbr; i++) {
    const { x, y } = getPoint(i, c);

    const circle = document.createElementNS(SVGNS, "circle");
    circle.setAttributeNS(null, "cx", x);
    circle.setAttributeNS(null, "cy", y);
    circle.setAttributeNS(null, "r", 5);
    circle.setAttributeNS(null, "fill", "black");
    circle.setAttributeNS(null, "stroke", "black");
    circle.setAttributeNS(null, "stroke-width", "3");
    svg.appendChild(circle);

    const p = getPoint(i, {
      r: c.r + 30,
      cx: c.cx,
      cy: c.cy,
      nbr: c.nbr,
    });

    const text = document.createElementNS(SVGNS, "text");
    text.setAttributeNS(null, "x", p.x);
    text.setAttributeNS(null, "y", p.y);
    text.setAttributeNS(null, "fill", "black");
    text.setAttributeNS(null, "text-anchor", "middle");
    text.appendChild(document.createTextNode(i));
    svg.appendChild(text);
  }
}

function addLine(n1, n2, c) {
  const svg = document.querySelector("svg");
  const p1 = getPoint(n1, c);
  const p2 = getPoint(n2, c);
  const line = document.createElementNS(SVGNS, "line");
  line.setAttributeNS(null, "x1", p1.x);
  line.setAttributeNS(null, "y1", p1.y);
  line.setAttributeNS(null, "x2", p2.x);
  line.setAttributeNS(null, "y2", p2.y);
  line.setAttributeNS(null, "stroke", "blue");
  line.setAttributeNS(null, "stroke-width", "3");
  svg.appendChild(line);
}

function main() {
  console.log("start");
  const c = {
    r: 200,
    cx: 400,
    cy: 250,
    nbr: 10,
  };
  addSmallCircles(c);
  addLine(0, 3, c);
}

main();
