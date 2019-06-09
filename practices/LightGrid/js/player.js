class Player {
    //angle is in degrees
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.angle = 0;
        this.fov = 360;
        this.step = 0.1;
        this.color = color(255, 10);
        this.playerColor = color(255, 255, 0);
        this.speedX = 0;
        this.speedY = 0;
        this.strokeWeight = 1;
        this.rays = [];
        this.friction = 0.5;

        //make ray objects
        for (let i = 0; i < this.fov / this.step; i++) {
            let ang = this.step * i - this.fov / 2 + this.angle;
            this.rays.push(new Ray(this.pos.x, this.pos.y, ang));
            //console.log(ang);
            this.rays[i].color = this.color;
            this.rays[i].strokeWeight = this.strokeWeight;
        }
    }

    show() {
        for (let i = 0; i < this.rays.length; i++) {
            rays[i].draw();
        }
        // fill(this.playerColor);
        // circle(this.pos.x, this.pos.y, 10);
    }

    setPos(px, py) {
        this.pos.x = px
        this.pos.y = py
        for (let i = 0; i < this.rays.length; i++) {
            this.rays[i].pos.x = px;
            this.rays[i].pos.y = py;
        }
    }

    move(px, py) {
        this.setPos(px + this.pos.x, py + this.pos.y);
    }

    update() {
        if (this.speedX > 0) {
            this.speedX -= this.friction;
        } else if (this.speedX < 0) {
            this.speedX += this.friction;
        }
        if (this.speedY < 0) {
            this.speedY += this.friction;
        } else if (this.speedY > 0) {
            this.speedY -= this.friction;
        }
        this.move(this.speedX, this.speedY);
    }
}