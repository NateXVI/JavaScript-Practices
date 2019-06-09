let rays = [];

class Ray{
    constructor(posX, posY, angle){
        this.pos = createVector(posX, posY);
        this.dir = p5.Vector.fromAngle(radians(angle));
        this.color = color(255);
        this.strokeWeight = 1;
        rays.push(this);
    }

    cast(bar){
        const x1 = bar.a.x;
        const y1 = bar.a.y;
        const x2 = bar.b.x;
        const y2 = bar.b.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0) {
            return null;
        }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

        if (t > 0 && t < 1 && u > 0) {
            const intersection = createVector();
            intersection.x = x1 + t * (x2 - x1);
            intersection.y = y1 + t * (y2 - y1);
            return intersection;
          } else {
            return null;
          }

    }

    draw(){
        const ray = this;
        let closest = null;
        let record = Infinity;

        for (let i = 0; i < boundaries.length; i++){
            let point = this.cast(boundaries[i]);

            if (point){
                const d = p5.Vector.dist(this.pos, point);
                if (d < record) {
                    record = d;
                    closest = point;
                  }
            }
        }

        if (closest){
            stroke(this.color);
            strokeWeight(this.strokeWeight);

            line(this.pos.x, this.pos.y, closest.x, closest.y);
            // point(closest.x, closest.y);
        }
    }

    setAngle(angle){
        this.dir = p5.Vector.fromAngle(radians(angle));
    }

    
}

function castAll(){
    let intersections = [];
    let res;
    for (let i = 0; i < rays.length; i++){
        for (let id = 0; i < boundaries.length; i++){
            res = rays[i].cast(boundaries[id]);
            if (res != null) intersections.push([rays[i].pos, res]);
        }
    }
    return intersections;
}

