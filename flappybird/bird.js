class Bird {
	constructor(){
	this.y = height/2;
	this.x = width/5;
	this.gravity = 0.3;
	this.velocity =0;
	this.size = width/12;
	}
	show() {
		fill(255);
		circle(this.x, this.y, this.size);
		
	}

	update() {
		this.y += this.velocity;
		this.velocity += this.gravity;
	}

	jump() {
		this.velocity = -4;
		
	}

}