let ground;
let boxx;
let bird;
let world, engine;
let mConstraint;

function setup() {
  const canvas = createCanvas(600, 400);
  engine = Matter.Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-10 , width , 20);
  boxx = new Box(width*5/6 ,height-400 , 40 , 60);
  bird = new Bird(width/6 , height-400 , 20);
  const mouse = Matter.Mouse.create(canvas.elt);
  const options= {
    mouse: mouse
  }
  mConstraint = Matter.MouseConstraint.create(engine,options);
  Matter.World.add(world,mConstraint);
}

function draw() {
  Matter.Engine.update(engine,  [delta=16.666]);
  background(252);
  ground.show();
  boxx.show();
  bird.show();
}