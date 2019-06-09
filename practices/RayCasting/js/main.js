let walls = []
let ray;
let light;
let something = 1;

function setup(){
    createCanvas(600, 600);
    walls[0] = new Boundary(0, 0, width, 0);
    walls[1] = new Boundary(0, 0, 0, height);
    walls[2] = new Boundary(width, 0, width, height);
    walls[3] = new Boundary(0, height, width, height);

    for (let i = 0; i < 10; i++){
        walls.push(new Boundary(random(width), random(height), random(width), random(height)));
    }
    ray = new Ray(width/2, height/2, 0);

    light = new Light(width/2, height/2);



}

function draw(){
    background(0);
    drawBoundaries();
    strokeWeight(5);
    point(ray.pos.x, ray.pos.y);
    ray.dir.x = mouseX - ray.pos.x;
    ray.dir.y = mouseY - ray.pos.y;

    light.show();
    something+=1;
    light.setAngle(something);

    ray.draw();


    
    // console.log(intersection);

    // for (let i = 0; i < boundaries.length; i++){
    //     let intersection = ray.cast(boundaries[i]);
    //     if (intersection != null){
    //         line(ray.pos.x, ray.pos.y, intersection.x, intersection.y);
    //     }
    // }

}
