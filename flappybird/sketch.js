var bird;
let canvas;

function setup() {
  canvas = createCanvas(300, 500);
  bird = new Bird();
}

function draw() {
  background(100);
  bird.update();
  bird.show();
}