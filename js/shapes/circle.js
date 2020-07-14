import Shape from "./shape.js";

export default class Circle extends Shape {
  constructor(x, y, r, colors) {
    super(x, y, colors);
    this.r = r;
  }
  draw() {
    this.setStroke();
    this.setFill();
    this.setStrokeWeight();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    this.reset();
  }
}
