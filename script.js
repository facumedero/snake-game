let xSnake = 400;
let ySnake = 400;
let speedSnake = 3;
let direction = { directionX: 1, directionY: 0 };
let actualBall = null;

function setup() {
    createCanvas(800, 800);
}
  
function draw() {
    background(0);
    if (!actualBall ){
        actualBall = generateRandomBall();
    }
    drawBorder();
    drawBall(actualBall);
    drawPlayer(xSnake,ySnake)
    updatePlayer();
    
}

function updatePlayer() {
    if ( xSnake > 0 && xSnake <= 750 ){
        xSnake = xSnake + direction.directionX * speedSnake;
    }
    else if ( xSnake > 750 ) {
        xSnake = xSnake % 750;
    } else if ( xSnake < 0) {
        xSnake = width - 50;
    }
    
    ySnake = ySnake + direction.directionY * speedSnake;
    ySnake = constrain(ySnake, 50, height - 100);
}

function keyPressed() {
  switch (keyCode) {
      case LEFT_ARROW:
          xSnake -= 1;
          direction = {directionX: -1, directionY: 0 }
          break;
      case RIGHT_ARROW:
          xSnake += 1;
          direction = { directionX: 1,directionY: 0 }
          break;
      case UP_ARROW:
          ySnake -= 1;
          direction = { directionX: 0, directionY: -1 }
          break;
      case DOWN_ARROW:
          ySnake += 1;
          direction = { directionX: 0, directionY: 1}
          break;
    }  
}

function drawPlayer(xSnake) {
    rect(xSnake, ySnake, 50, 50);
}

function drawBorder() {
    for (let indexY of [0,height - 50]) {
        for (let indexX = 0; indexX < width; indexX+= 50) {
          fill(255, 204, 0);  
          drawBlock(indexX, indexY);
        }
    }
}

function drawBlock(x,y) {
    rect(x, y, 50, 50);
}

function generateRandomBall() {
    return { x: getRandomArbitrary(0,width), y:getRandomArbitrary(0,height) }
}

function drawBall(ball) {
    fill(255, 204, 0);
    circle(ball.x, ball.y, 20);
    fill(255, 255, 255 )
}

function getRandomArbitrary(min, max) {
    return Math.random() * ((max) - min) + min;
}


function drawAxis() {
    for (let indexY = 0; indexY <= height; indexY += 100) {
        for (let indexX = 0; indexX <= width; indexX += 100) {
            drawPoint(indexX, indexY);
        };
    }
}

function drawPoint(x, y) {
    strokeWeight(8);
    point(x, y);
    textSize(15);
    text(`(${x},${y})`, x, y + 18);
}
