var bird;
let canvas;
var blocks;
var score;

function setup() {
  	canvas = createCanvas(300, 500);
  	resetGame();
  	blocks.push(new Block());
	// var button = createButton('Reset Game');
 //  	button.mousePressed(resetGame);
 }


  function keyPressed(){
  	if (key == ' ') {
  		bird.jump();
  	}
  	else if (keyCode === ENTER){
  		console.log('enter pressed');
  		resetGame();
  		
  	}
  }

  function resetGame() {
  	score = 0;
  	bird = new Bird();
  	blocks = [];
	loop();
  }



function draw() {
  	background(100);
  	bird.update();
  	bird.show();

  	if (frameCount % 100 == 0){
  		blocks.push(new Block());
  	}
	for (var i = blocks.length-1 ; i >= 0 ; i--){
		console.log(frameCount);
  		blocks[i].show();
  		blocks[i].update();
  		if (blocks[i].offscrean()) {
  			blocks.splice(i,1);
  		}
  		if (blocks[i].passed()) {
  			score++;
  		}

	}
	showScore();
	collisionChecker();
}

//this function detects when the bird is collid with a block or with the floor
function collisionChecker() {
	 //collition between block and bird
 	for (var i =0 ; i < blocks.length ; i++){
  		if (blocks[i].x < (bird.x + bird.size/2) &
  		 blocks[i].x > (bird.x - bird.size/2 - blocks[i].width) &
  		  (bird.y <= blocks[i].open - blocks[i].openSize + bird.size/2
  		   | bird.y >= blocks[i].open + blocks[i].openSize - bird.size/2 ) ) {
		gameover();
  		}
	}
	//bird fall to the ground 
	if (bird.y > height-10
		) {
		gameover();
		}
}

function gameover() {
	textSize(50);
	fill(0);
	text('Game Over', width/13, height/2, width, height);
	fill(30);
	textSize(30);
	text('press Enter to restart game', width/6, height/2+60, width*12/13, height);
	noLoop();
}

function showScore() {
	textSize (30);
	fill(0);
	text ('Score:' + score , 30, 30);
}