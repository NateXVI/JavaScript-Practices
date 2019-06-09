class Light{
    //angle is in degrees
    constructor(x, y, angle = 0, fov = 100, step = 1, strokeW = 3, c = color(255, 100)){
        this.pos = createVector(x, y);
        this.angle = angle;
        this.fov = fov;
        this.step = step;
        this.color = c;
        this.strokeWeight = strokeW;
        this.rays = [];

        //make ray objects
        for (let i = 0; i <= fov/step; i++){
            let ang = step * i - this.fov / 2 + this.angle;
            this.rays.push(new Ray(this.pos.x, this.pos.y, ang));
            //console.log(ang);
            this.rays[i].color = this.color;
            this.rays[i].strokeWeight = this.strokeWeight;
        }
    }

    show(){
        for (let i = 0; i < this.rays.length; i++){
            rays[i].draw();
        }
    }

    setAngle(a){
        this.angle = a;
        for (let i = 0; i <this.rays.length; i++){
            let num = this.step * i - this.fov / 2 + this.angle;
            this.rays[i].dir = p5.Vector.fromAngle(radians(num));
        }
    }

    setPos(px, py){

        for (let i = 0; i <this.rays.length; i++){
            this.rays[i].pos.x = this.pos.x = px;
            this.rays[i].pos.y = this.pos.y = py;
        }
    }
}