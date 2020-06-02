class Block {
	constructor() {
		this.open = random(height/8,height*7/8)
		this.width = width/7;
		this.x = width;
		this.velocity =1.5;
		this.openSize = 35;
		this.pass = false;
	}
	update(){
		this.x -= this.velocity;
	}
	show() {
		fill(200);
		var upperBlock = rect(this.x, 0 , this.width, this.open-this.openSize);
		var lowerBlock = rect(this.x, this.open+this.openSize, this.width, height-this.open+20);
	}
	offscrean() {
		if (this.x < -50) {
			return true;
		}
	}

	passed() {
		if ( !this.pass & this.x < (bird.x - bird.size/2 - this.width)) {
			this.pass = true;
			return true;
		}
		else {return false;}
	}
}