const SVGNS = "http://www.w3.org/2000/svg";

function addSmallCircles(nbr, c) {
  const svg = document.querySelector("svg");
  for (let i = 0; i < nbr; i++) {
    const angle = (i * (Math.PI * 2)) / nbr;
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

function main() {
  console.log("start");
  addSmallCircles(10, {
    r: 200,
    cx: 400,
    cy: 250,
  });
}

main();
