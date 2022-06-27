import Vector from './vector.js';

class Line {
  constructor(startX, startY, length, angle = 0) {
    this.start = new Vector(startX, startY);
    this.length = length;
    this.angle = angle;
  }

  draw(ctx, circle) {
    ctx.beginPath();
    ctx.moveTo(this.start.x, this.start.y);

    if (circle.pos.y < 400)
      ctx.lineTo(this.start.x - this.length * Math.cos(this.angle),
             this.start.y + this.length * Math.sin(this.angle));
    else {
      ctx.lineTo(this.start.x - this.length * Math.cos(this.angle), 
            this.start.y - this.length * Math.sin(this.angle));

    }

    ctx.stroke();
  }

  update(c) {
    this.start = new Vector(c.pos.x, c.pos.y);
  }
}


export default Line;
