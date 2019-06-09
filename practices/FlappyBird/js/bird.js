class Bird {
    constructor() {
        this.pos = createVector(width * 0.2, height * 0.4);
        this.size = 40;
        this.color = color(255, 255, 0);
        this.score = 0;
        this.highScore = 0;
        this.velocity = createVector(0, 0);
        this.gravity = 0.3;
        this.jumpPower = 6;
        this.input = 32;
        this.pInput = false;
    }

    draw() {
        fill(this.color);
        noStroke();
        circle(this.pos.x, this.pos.y, this.size);
    }

    update() {
        this.velocity.y += this.gravity;
        this.pos.y += this.velocity.y;

        if (this.pos.y >= height - this.size / 2) {
            this.pos.y = height - this.size / 2;
            this.velocity.y = 0;
            startNewGame();
        } else if (this.pos.y < this.size / 2) {
            this.pos.y = this.size / 2;
            // this.velocity.y = 0;
        }
    }

    jump() {
        if (keyIsDown(this.input) == true && this.pInput == false) {
            this.pInput = true;
            this.velocity.y = -this.jumpPower - this.gravity;
        } else if (keyIsDown(this.input) == false) {
            this.pInput = false;
        }
    }
}


function startNewGame() {
    if (bird.score > bird.highScore) bird.highScore = bird.score;
    bird.pos = createVector(width * 0.2, height * 0.4);
    bird.score = 0;
    pipes = [];
    frameCount = 1;
    pipes.push(new Pipe);
}