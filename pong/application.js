// Select canvas element
const canvas = document.getElementById("pong")

// Create a canvas "context"
const context = canvas.getContext('2d');

const paddleWidth = 15;
const paddleHeight = 100;
const paddleSpeed = 20;
const ballSize = 10;
const ballSpeed = 15;

var paddleOneX = canvas.width - paddleWidth * 2;
var paddleOneY = 0;

var paddleTwoX = paddleWidth;
var paddleTwoY = 0;

var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballDirection = 0;

const drawPaddleOne = function() {
  context.fillStyle = 'white';
  context.fillRect(paddleOneX, paddleOneY, paddleWidth, paddleHeight);  
}

const drawPaddleTwo = function() {
  context.fillStyle = 'white';
  context.fillRect(paddleTwoX, paddleTwoY, paddleWidth, paddleHeight);  
}

const paddleOneCanMoveUp = function() {
  return !(paddleOneY - paddleSpeed < 0)
}

const paddleOneCanMoveDown = function() {
  return !(paddleOneY + paddleSpeed + paddleHeight > canvas.height)
}

const paddleTwoCanMoveUp = function() {
  return !(paddleTwoY - paddleSpeed < 0)
}

const paddleTwoCanMoveDown = function() {
  return !(paddleTwoY + paddleSpeed + paddleHeight > canvas.height)
}

const serveBall = function() {
  const randomAngle = Math.random() * 360;
  ballDirection = randomAngle;
  console.log(ballDirection);
}

const drawBall = function() {
  context.fillStyle = 'white';
  context.fillRect(ballX, ballY, ballSize, ballSize);  
}

const checkBall = function() {
  if (ballX < paddleTwoX || ballX > paddleOneX + paddleWidth) {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;

    serveBall();
  }
}

const ballHitPlayerOnePaddle = function() {
  const ballAngles = directionFromAngle(ballDirection)
  const ballXSpeed = ballAngles.x;

  return ballY > paddleOneY &&
   ballY < paddleOneY + paddleHeight &&
   ballX + (ballXSpeed * ballSpeed) + ballSize > paddleOneX
}

const ballHitPlayerTwoPaddle = function() {
  const ballAngles = directionFromAngle(ballDirection)
  const ballXSpeed = ballAngles.x;

  return ballY > paddleTwoY &&
   ballY < paddleTwoY + paddleHeight &&
   ballX + (ballXSpeed * ballSpeed) + ballSize < paddleTwoX + (paddleWidth * 2)
}

const moveBall = function() {
  const ballAngles = directionFromAngle(ballDirection)
  const ballXSpeed = ballAngles.x;
  const ballYSpeed = ballAngles.y;

  if (ballHitPlayerOnePaddle()) {
    const diff = (180 + ballDirection) - 360;
    ballDirection = 360 - diff;
  } else if (ballHitPlayerTwoPaddle()) {
    const diff = (180 + ballDirection) - 0;
    ballDirection = 0 - diff;
  } else if (ballY + ballYSpeed * ballSpeed > canvas.height - ballSize) {
    const diff = (180 + ballDirection) - 0;
    ballDirection = 180 - diff;
  } else if (ballY + ballYSpeed * ballSpeed < 0) {
    const diff = (180 + ballDirection) - 90;
    ballDirection = 90 - diff;
  }

  ballX += ballXSpeed * ballSpeed;
  ballY += ballYSpeed * ballSpeed;
}

const directionFromAngle =function(angle) {
  const radians = angle * (Math.PI / 180);

  const ySpeed = Math.sin(radians);
  const xSpeed = Math.cos(radians);

  return { x: xSpeed, y: ySpeed };
}

// Clears canvas by drawing a big black rectangle
const clearCanvas = function() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

serveBall();

// Have a loop continuously redraw everything 
setInterval(function() {
  if (playerOneKeyUp && paddleOneCanMoveUp()) { paddleOneY -= paddleSpeed; }
  if (playerOneKeyDown && paddleOneCanMoveDown()) { paddleOneY += paddleSpeed; }
  if (playerTwoKeyUp && paddleTwoCanMoveUp()) { paddleTwoY -= paddleSpeed; }
  if (playerTwoKeyDown && paddleTwoCanMoveDown()) { paddleTwoY += paddleSpeed; }

  clearCanvas();
  moveBall();
  checkBall();
  drawBall();

  drawPaddleOne();
  drawPaddleTwo();
}, 30)

var playerOneKeyUp = false;
var playerOneKeyDown = false;
var playerTwoKeyUp = false;
var playerTwoKeyDown = false;

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowUp") { playerOneKeyUp = true; }
  if (event.key == "ArrowDown") { playerOneKeyDown = true; }
  if (event.key == "q") { playerTwoKeyUp = true; }
  if (event.key == "a") { playerTwoKeyDown = true; }
});

document.addEventListener("keyup", function(event) {
  if (event.key == "ArrowUp") { playerOneKeyUp = false; }
  if (event.key == "ArrowDown") { playerOneKeyDown = false; }
  if (event.key == "q") { playerTwoKeyUp = false; }
  if (event.key == "a") { playerTwoKeyDown = false; }
});

