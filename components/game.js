import Vector from './vector.js';
import Circle from './circle.js';
import Line from './line.js';
import Tracker from './tracker.js';


class Game {
	constructor() {
		this.canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext('2d');

		this.c1 = new Circle(50,50,16,'red', 10);

		this.line = new Line(this.c1.pos.x, this.c1.pos.y, 200, 0);

		this.t = new Tracker(this.c1, 400, 400, 50);
		this.gameOver = false;


	}

	clearCanvas() {
	  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	start(startTime) {
	  this.clearCanvas();
	  this.line.angle = this.t.getAngle();
	  this.c1.update();
	  this.c1.draw(this.ctx);
	  this.line.update(this.c1);
	  this.line.draw(this.ctx, this.c1);
	  if (!this.gameOver) {
		  window.requestAnimationFrame(this.start.bind(this));
	  }
	}
}

export default Game;