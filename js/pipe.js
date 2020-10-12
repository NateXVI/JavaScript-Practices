class Pipe {
    constructor() {
        this.color = color(50, 200, 0);
        this.width = 80;
        this.endWidth = 5;
        this.endHeight = 50;
        this.pos = width + this.endHeight;
        this.velocity = 3;
        this.gap = 150;
        this.top = random(height * 0.2, height * 0.6);
        this.bottom = this.top + this.gap;

        console.log(this.top);
    }

    draw() {
        // noStroke();
        stroke(0);
        fill(this.color);

        rect(this.pos, 0, this.width, this.top);
        rect(this.pos - this.endWidth, this.top, this.width + this.endWidth * 2, -this.endHeight);

        rect(this.pos, this.bottom, this.width, height);
        rect(this.pos - this.endWidth, this.bottom, this.width + this.endWidth * 2, this.endHeight);
    }

    update() {
        this.prePos = this.pos;
        this.pos -= this.velocity;

    }
}