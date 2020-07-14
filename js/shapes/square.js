import Shape from "./shape.js";

export default class Square extends Shape {
  constructor(x, y, r, colors) {
    super(x, y, colors);
    this.r = r;
  }

  draw() {
    rectMode(CENTER);
    this.setStroke();
    this.setFill();
    this.setStrokeWeight();
    rect(0, 0, this.r * 2, this.r * 2);
    this.reset();
  }
}
