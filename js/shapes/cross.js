import Shape from "./shape.js";

export default class Cross extends Shape {
  constructor(x, y, w, h, colors) {
    super(x, y, colors);
    this.w = w;
    this.h = h;
  }

  draw() {
    this.setStroke();
    this.setFill();
    this.setStrokeWeight();
    line(this.x - this.w / 2, this.y, this.x + this.w / 2, this.y);
    line(this.x, this.y - this.h / 2, this.x, this.y + this.h / 2);
    this.reset();
  }
}
