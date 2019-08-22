var bird;
let canvas;
var blocks = [];

function setup() {
  canvas = createCanvas(300, 500);
  bird = new Bird();
	blocks.push(new Block());
 }


  function keyPressed(){
  	if (key == ' ') {
  		bird.jump();
  	}
  }



function draw() {
  	background(100);
  	bird.update();
  	bird.show();

  	if (frameCount % 100 == 0){
  		blocks.push(new Block());
  	}
	for (var i =0 ; i < blocks.length ; i++){
  		blocks[i].show();
  		blocks[i].update();
	}
	collisionChecker();
}


function collisionChecker() {
	 //collition between block and bird
 	for (var i =0 ; i < blocks.length ; i++){
  		if (blocks[i].x < (bird.x + bird.size/2) &
  		 blocks[i].x > (bird.x - bird.size/2 - blocks[i].width) &
  		  (bird.y <= blocks[i].open - blocks[i].openSize + bird.size/2
  		   | bird.y >= blocks[i].open + blocks[i].openSize - bird.size/2 ) ) {
  		noLoop();
  		}
	}
	//bird fall to the ground 
	if (bird.y > height-10
		) {
			noLoop();
		}
}