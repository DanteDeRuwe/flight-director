import ArtificialHorizon from "./components/artificial-horizon.js";

const CANVAS_HTML = document.querySelector("#canvas");
let canvas;
let RADIUS;
let pitch, roll, yaw;

/* SETUP */
window.setup = () => {
  canvas = createCanvas(CANVAS_HTML.clientWidth, CANVAS_HTML.clientHeight);
  canvas.parent("canvas");
};

/* DRAW */
window.draw = () => {
  background(0);
  let width = CANVAS_HTML.clientWidth;
  let height = CANVAS_HTML.clientHeight;

  translate(width / 2, height / 2);
  RADIUS = min(height, width) * 0.4;

  pitch = roll = 0;
  new ArtificialHorizon(RADIUS, pitch, roll).draw();
};
