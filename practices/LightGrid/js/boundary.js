let boundaries = [];

class Boundary{
    constructor(x1,y1,x2,y2, c = color(255)){
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        this.color = c;
        this.strokeWeight = 1;
        boundaries.push(this);
        //console.log(boundaries);
    }
    
    draw(){
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}

function drawBoundaries(){
    for (let i = 0; i < boundaries.length; i++){
        boundaries[i].draw();
    }
}