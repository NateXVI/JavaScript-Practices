class Box{
    constructor(x1, y1, x2, y2, c = color(255), sw = 2){
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        this.color = c;
        this.strokeWeight = sw;
        this.walls = []

        this.walls.push(new Boundary(this.a.x, this.a.y, this.b.x, this.a.y));
        this.walls.push(new Boundary(this.a.x, this.b.y, this.b.x, this.b.y));
        this.walls.push(new Boundary(this.a.x, this.a.y, this.a.x, this.b.y));
        this.walls.push(new Boundary(this.b.x, this.a.y, this.b.x, this.b.y));

        for(let i = 0; i < walls.length; i++){
            // this.walls[i].color = this.color;
            // this.walls[i].strokeWeight = this.strokeWeight;

        }

    }
}