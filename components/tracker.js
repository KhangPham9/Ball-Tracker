import Vector from './vector.js';


class Tracker {
  constructor(c, originX, originY, length = 50) {
    this.circle = c;
    this.origin = new Vector(originX, originY);
    this.end = new Vector(originX + length, originY);

    this.lineVector = new Vector(this.origin.x - this.end.x, 
                                 this.origin.y - this.end.y);

  }

  getAngle() {
    this.circleVector = new Vector(this.origin.x - this.circle.pos.x,
                                  this.origin.y - this.circle.pos.y);
    this.circleMag = this.circleVector.mag();
    this.lineMag = this.lineVector.mag();
    this.dot = this.circleVector.dot(this.lineVector);
    let angle = Math.acos( (this.dot / this.circleMag / this.lineMag) );
    return angle;
  }

}
export default Tracker;
