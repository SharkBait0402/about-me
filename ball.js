const ball ={
  size: 4,
  top: 98,
  left: 48,
  speed: .5,
  elem: document.querySelector("#ball")
}

ball.velocityX = -1 * ball.speed // multiply by 1 to so speed can be changed later in the future easier
ball.velocityY = -1 * ball.speed



function bounceBall() {
  if(ball.top == 100 - ball.size/2) {
    ball.velocityY = -1 * ball.speed;
  } else if(ball.top == 0 + ball.size/2) {
    ball.velocityY = 1 * ball.speed;
  }

  if(ball.left == 100 - ball.size/2) {
    ball.velocityX = -1 * ball.speed;
  } else if(ball.left == 0 + ball.size/2) {
    ball.velocityX = 1 * ball.speed;
  }
}

function updateBallPosition() {
  ball.top += ball.velocityY;
  ball.left += ball.velocityX;
}

function updateBall() {
  bounceBall();
  updateBallPosition();
}

function renderball() {
  ball.elem.style.top = ball.top + "%";
  ball.elem.style.left = ball.left + "%"
}

function gameLoop() {
  // Write any code you want to happen on every animation frame here
  updateBall();
  renderball();
  
  // Remember to setup the next animation frame before you finish
  requestAnimationFrame(gameLoop);
}

// This should probably be the final line in your
// program and the one that sets off the gameLoop.
requestAnimationFrame(gameLoop);