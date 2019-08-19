class Box {

 constructor(x,y ,w, h) {
      this.body = Matter.Bodies.rectangle(x, y, w, h);
  Matter.World.add(world,this.body);
     this.w = w;
     this.h = h;
  }
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    rotate(angle);
    translate(pos.x, pos.y);
    fill(255);
    strokeWeight(2);
    stroke(51);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}