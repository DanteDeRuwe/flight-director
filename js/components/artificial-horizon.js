import Circle from "../shapes/circle.js";
import Cross from "../shapes/cross.js";
import Arc from "../shapes/arc.js";

export default class ArtificialHorizon {
  constructor(r, pitch, roll) {
    this.pitch = pitch;
    this.roll = roll;
    this.r = r;
  }

  draw() {
    //colors
    let lowercolor = { stroke: "#fff", fill: "#AD6B31", strokeWeight: 2 };
    let maincolor = { fill: "#00ADB4", stroke: "#fff", strokeWeight: 2 };
    let crosscolor = { stroke: "#40FC3F", strokeWeight: 3 };
    let bgcolor = { stroke: "#000", strokeWeight: 4 };

    //shapes
    let lower = new Arc(0, 0, this.r, lowercolor, this.pitch, PI - this.pitch, CHORD);
    let cross = new Cross(0, 0, this.r * 1.2, this.r * 0.8, crosscolor);
    let main = new Circle(0, 0, this.r, maincolor);
    let ring = new Circle(0, 0, this.r, bgcolor);

    //draw
    [main, lower, ring, cross].forEach(shape => shape.draw());
  }
}
