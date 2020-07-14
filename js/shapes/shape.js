export default class Shape {
  constructor(x, y, colors) {
    this.x = x;
    this.y = y;
    this.colors = colors;
  }
  reset() {
    noFill();
    noStroke();
  }
  setFill() {
    if (!!this.colors.fill) {
      fill(this.colors.fill);
    } else {
      noFill();
    }
  }
  setStroke() {
    if (!!this.colors.stroke) {
      stroke(this.colors.stroke);
    } else {
      noStroke();
    }
  }
  setStrokeWeight() {
    if (!!this.colors.strokeWeight) {
      strokeWeight(this.colors.strokeWeight);
    } else {
      strokeWeight(1);
    }
  }
}
