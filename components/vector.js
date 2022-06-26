class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  sub(v) {
    return this.add(new Vector(v.x * -1, v.y * - 1));
  }
  mag() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
}

export default Vector;


function checkVectorAddition() {
  let v = new Vector(1,1);
  console.log(v);

  let v2 = new Vector(2,2);

  console.log(v2);

  let v3 = v.add(v2);
  console.log(v3);
}
// checkVectorAddition();

function checkVectorSub() {
  let v = new Vector(1,1);
  console.log(v);

  let v2 = new Vector(2,2);

  console.log(v2);

  let v3 = v.sub(v2);
  console.log(v3);
}
// checkVectorSub();
