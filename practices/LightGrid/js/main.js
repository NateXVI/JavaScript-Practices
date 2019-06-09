let walls = []
let ray;
let player;
let something = 1;
let boxes = [];

function setup() {
    createCanvas(displayWidth - 100, displayHeight - 100);
    walls[0] = new Boundary(0, 0, width, 0);
    walls[1] = new Boundary(0, 0, 0, height);
    walls[2] = new Boundary(width, 0, width, height);
    walls[3] = new Boundary(0, height, width, height);

    // walls.push(new Boundary(0, 100, width, 100));
    // walls.push(new Boundary(0, 200, width, 200));

    player = new Player(width / 2, height / 2);
    // boxes.push(new Box(200, 400, 300, 500));

    let gap = 200;
    for (let i = 0; i < width / gap; i++) {
        for (let a = 0; a < height / gap; a++) {
            boxes.push(new Box(i * gap, a * gap, (i + 1) * gap, (a + 1) * gap))
        }
    }

}

function draw() {
    background(150, 0, 0);
    drawBoundaries();
    checkKeys();
    player.update();

    if (player.pos.x >= width) {
        player.setPos(0, player.pos.y);
    } else if (player.pos.x < 0) {
        player.setPos(width, player.pos.y);
    }
    if (player.pos.y < 0) {
        player.setPos(player.pos.x, height);
    } else if (player.pos.y >= width) {
        player.setPos(player.pos.x, 0);
    }

    player.show();



}

let speed = 3;
let acceleration = 1;

// function keyPressed() {
//     if (keyCode === LEFT_ARROW) {
//       player.speedX -= speed;
//     } else if (keyCode === RIGHT_ARROW) {
//         player.speedX += speed;
//     } else if (keyCode === UP_ARROW) {
//         player.speedY -= speed;
//     }else if (keyCode === DOWN_ARROW) {
//         player.speedY += speed;
//     }

//   }

//   function keyReleased() {
//     if (keyCode === LEFT_ARROW) {
//       player.speedX += speed;
//     } else if (keyCode === RIGHT_ARROW) {
//         player.speedX -= speed;
//     } else if (keyCode === UP_ARROW) {
//         player.speedY += speed;
//     }else if (keyCode === DOWN_ARROW) {
//         player.speedY -= speed;
//     }

//   }

let topSpeed = 100;

function checkKeys() {
    if (keyIsDown(LEFT_ARROW)) {
        player.speedX -= acceleration + player.friction;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.speedX += acceleration + player.friction;
    }
    if (keyIsDown(UP_ARROW)) {
        player.speedY -= acceleration + player.friction;
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.speedY += acceleration + player.friction;
    }

    player.speedX = constrain(player.speedX, topSpeed * -1, topSpeed);
    player.speedY = constrain(player.speedY, topSpeed * -1, topSpeed);
}