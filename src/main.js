const SVGNS = "http://www.w3.org/2000/svg";

function addSmallCircles(c) {
  const svg = document.querySelector("svg");
  for (let i = 0; i < c.nbr; i++) {
    const angle = (i * (Math.PI * 2)) / c.nbr;
    const x = c.cx + c.r * Math.cos(angle);
    const y = c.cy + c.r * Math.sin(angle);
    const circle = document.createElementNS(SVGNS, "circle");
    circle.setAttributeNS(null, "cx", x);
    circle.setAttributeNS(null, "cy", y);
    circle.setAttributeNS(null, "r", 5);
    circle.setAttributeNS(null, "fill", "black");
    circle.setAttributeNS(null, "stroke", "black");
    circle.setAttributeNS(null, "stroke-width", "3");
    svg.appendChild(circle);
  }
}

function addLine(n1, n2, c) {
  const svg = document.querySelector("svg");
  const angle1 = (n1 * (Math.PI * 2)) / c.nbr;
  const angle2 = (n2 * (Math.PI * 2)) / c.nbr;

  const x1 = c.cx + c.r * Math.cos(angle1);
  const y1 = c.cy + c.r * Math.sin(angle1);
  const x2 = c.cx + c.r * Math.cos(angle2);
  const y2 = c.cy + c.r * Math.sin(angle2);
  const line = document.createElementNS(SVGNS, "line");
  line.setAttributeNS(null, "x1", x1);
  line.setAttributeNS(null, "y1", y1);
  line.setAttributeNS(null, "x2", x2);
  line.setAttributeNS(null, "y2", y2);
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
