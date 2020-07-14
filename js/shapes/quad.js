import Shape from "./shape.js";

export default class Quad extends Shape {
  constructor(x, y, colors, edges) {
    super(x, y, colors);
    this.edges = edges;
  }

  draw() {
    this.setStroke();
    this.setFill();
    this.setStrokeWeight();
    quad(
      this.edges[0].x,
      this.edges[0].y,
      this.edges[1].x,
      this.edges[1].y,
      this.edges[2].x,
      this.edges[2].y,
      this.edges[3].x,
      this.edges[3].y
    );
    this.reset();
  }
}
