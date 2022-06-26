import Vector from './vector.js';
import Circle from './circle.js';
import Line from './line.js';
import Tracker from './tracker.js';

let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');


let c1 = new Circle(50,50,16,'red', 10);

let line = new Line(400, 400, 50, 0);

let t = new Tracker(c1, 400, 400, 50);

function clearCanvas() {
  let canvas = document.getElementById('canvas');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}



function start(startTime) {
  clearCanvas();
  line.angle = t.getAngle();
  c1.update();
  c1.draw(ctx);
  line.draw(ctx, c1);
  window.requestAnimationFrame(start);
}

start();
