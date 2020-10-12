let bird;
let pipes = [];
let flappyFont;
let isGameRunning = true;

function preload() {
    flappyFont = loadFont("assets/flappy.TTF");
}

function setup() {
    createCanvas(800, 600);
    frameRate(60);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0, 100, 200);
    inputs();
    process();
    render();
}

function inputs() {
    bird.jump();

}

function process() {
    if (isGameRunning) {
        bird.update();

        if (frameCount % 90 == 0) {
            nonFrames = frameCount;
            pipes.push(new Pipe);
        }

        for (let i = 0; i < pipes.length; i++) {
            pipes[i].update();

            if (this.pos <= 0 - this.width - this.endWidth) {
                pipes[i].splice(i, 1);
                // pipes.push(new Pipe())
            }

            const pipeMid = pipes[i].pos + pipes[i].width / 2;
            const preMid = pipes[i].prePos + pipes[i].width / 2;
            if (preMid > bird.pos.x && pipeMid <= bird.pos.x) bird.score++;

            let deltaX = bird.pos.x - max(pipes[i].pos, min(bird.pos.x, pipes[i].pos + pipes[i].width));
            let deltaY = bird.pos.y - max(0, min(bird.pos.y, pipes[i].top));
            if ((deltaX * deltaX + deltaY * deltaY) < (bird.size / 2 * bird.size / 2)) {
                startNewGame();
                return;
            }
            deltaY = bird.pos.y - max(pipes[i].bottom, min(bird.pos.y, height - pipes[i].bottom));
            if ((deltaX * deltaX + deltaY * deltaY) < (bird.size / 2 * bird.size / 2)) {
                startNewGame();
                return;
            }

        }

    }

}


function render() {
    if (isGameRunning) {
        bird.draw();


        for (let i = 0; i < pipes.length; i++) {
            pipes[i].draw();
        }

        push();
        strokeWeight(5);
        stroke(0);
        textSize(60);
        textFont(flappyFont);
        textAlign(CENTER);
        fill(255);
        text(bird.score, width / 2, 70);

        textSize(20);
        strokeWeight(3);
        textAlign(LEFT);
        text("HIGH SCORE:" + bird.highScore, 10, 30);
        pop();
    }
}