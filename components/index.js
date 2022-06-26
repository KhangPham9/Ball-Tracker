let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');
let speedFactor = 5;
let circle = {
  x: 50,
  y: 50,
  radius: 16,
  color: 'red'
};
document.addEventListener('keydown', (e) => {
  if (e.key === 'w') {
    circle.y -= 1 * speedFactor;
  } else if (e.key === 's') {
    circle.y += 1 * speedFactor;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'a') {
    circle.x -= 1 * speedFactor;
  } else if (e.key === 'd') {
    circle.x += 1 * speedFactor;
  }
});

circle.draw = () => {
    ctx.fillStyle = circle.color;

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();
}

circle.getAngle = () => {
  let xAxis = {
    startX: 400,
    startY: 400,
    endX: 450,
    endY: 400
  }
  let circleVector = {
    x: 400 - circle.x,
    y: 400 - circle.y
  }

  let lineVector = {
    x: xAxis.startX - xAxis.endX,
    y: xAxis.startY - xAxis.endY
  }
  magCircle = Math.sqrt(Math.pow(circleVector.x, 2) + Math.pow(circleVector.y, 2));
  magLine = Math.sqrt(Math.pow(lineVector.x, 2) + Math.pow(lineVector.y, 2));

  let dot = lineVector.x * circleVector.x + lineVector.y * circleVector.y;
  let angle = Math.acos(dot / magCircle / magLine);
  console.log(angle);
  return angle;
}



let line = {
  startX: 400,
  startY: 400,
  length: 50,
  angle: 0
}

line.draw = () => {
  ctx.beginPath();
  ctx.moveTo(line.startX, line.startY);

  if (circle.y < 400)
    ctx.lineTo(line.startX + line.length * Math.cos(line.angle), line.startY - line.length * Math.sin(line.angle));
  else {
    ctx.lineTo(line.startX + line.length * Math.cos(line.angle), line.startY + line.length * Math.sin(line.angle));

  }
  
  ctx.stroke();
}


function clearCanvas() {
  let canvas = document.getElementById('canvas');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(startTime) {
  clearCanvas();
  line.angle = circle.getAngle();
  line.draw();
  circle.draw();
  if (!this.gameOver)
    window.requestAnimationFrame(this.draw)
}

draw();
