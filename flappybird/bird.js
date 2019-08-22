class Bird {
	constructor(){
	this.y = height/2;
	this.x = width/5;
	this.gravity = 0.5;
	this.velocity =0;
	}
	show() {
		fill(255);
		circle(this.x, this.y, width/10);
	}

	update() {
		this.y += this.velocity;
		this.velocity += this.gravity;
	}

}