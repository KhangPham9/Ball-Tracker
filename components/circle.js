import Vector from './vector.js';
import Input from './input.js';

class Circle {
  constructor(x, y, r, c, s = 1) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.radius = r;
    this.color = c;
    this.speedFactor = s;
    this.input = new Input(this.vel);
  }

  update() {
    this.pos.y += this.vel.y * this.speedFactor;
    this.pos.x += this.vel.x * this.speedFactor;

  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();
  }

}

export default Circle;
