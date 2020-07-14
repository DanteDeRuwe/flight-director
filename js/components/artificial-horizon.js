import Cross from "../shapes/cross.js";
import Quad from "../shapes/quad.js";
import Square from "../shapes/square.js";

export default class ArtificialHorizon {
  constructor(r, pitch, roll) {
    this.pitch = pitch;
    this.roll = roll;
    this.r = r;
  }

  draw() {
    let screenAngle = (PI / 180) * 25;

    //colors
    let lowercolor = { stroke: "#fff", fill: "#AD6B31", strokeWeight: 2 };
    let maincolor = { fill: "#00ADB4", stroke: "#fff", strokeWeight: 2 };
    let crosscolor = { stroke: "#40FC3F", strokeWeight: 3 };
    let bgcolor = { stroke: "#000", strokeWeight: 20 };

    //shapes
    let cross = new Cross(0, 0, this.r, this.r, crosscolor);
    let upper = new Quad(0, 0, maincolor, [
      { x: -this.r, y: -this.r },
      { x: this.r, y: -this.r },
      { x: this.r, y: this.r * Math.tan(-this.roll) + this.r * (this.pitch / screenAngle) },
      { x: -this.r, y: -this.r * Math.tan(-this.roll) + this.r * (this.pitch / screenAngle) },
    ]);

    let lower = new Quad(0, 0, lowercolor, [
      { x: -this.r, y: -this.r * Math.tan(-this.roll) + this.r * (this.pitch / screenAngle) },
      { x: this.r, y: this.r * Math.tan(-this.roll) + this.r * (this.pitch / screenAngle) },
      { x: this.r, y: this.r },
      { x: -this.r, y: this.r },
    ]);

    let outer = new Square(0, 0, this.r + 1, bgcolor);

    [upper, lower, cross, outer].forEach(shape => shape.draw());
  }
}
