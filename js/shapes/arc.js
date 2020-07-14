import Circle from "./circle.js";

export default class Arc extends Circle {
  constructor(x, y, r, colors, start, stop, type) {
    super(x, y, r, colors);
    this.start = start;
    this.stop = stop;
    this.type = type;
  }

  draw() {
    this.setStroke();
    this.setFill();
    this.setStrokeWeight();
    arc(this.x, this.y, this.r * 2, this.r * 2, this.start, this.stop, this.type);
    this.reset();
  }
}
