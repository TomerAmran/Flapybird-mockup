class Bird {
  constructor(x, y, r) {
    this.body = Matter.Bodies.circle(x, y, r);
    Matter.World.add(world,this.body);
    this.r = r;
    
  }
  show() {
    const pos = this.body.position;
    // const angle = this.body.angle;
    push();
    // rotate(angle);
    translate(pos.x, pos.y);
    stroke(51);
    fill(255);
    strokeWeight(2);
    stroke(51);
    circle(0, 0, this.r*2);
    pop();
  }
}