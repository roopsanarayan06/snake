const gameBoard = document.getElementById('game-board');
const snake = document.getElementById('snake');
const food = document.getElementById('food');

let snakeX = 0;
let snakeY = 0;
let snakeDirection = 'right';
let foodX;
let foodY;

function startGame() {
    createFood();
    setInterval(moveSnake, 100);
    document.addEventListener('keydown', changeDirection);
}

function createFood() {
    foodX = Math.floor(Math.random() * 15) * 20;
    foodY = Math.floor(Math.random() * 15) * 20;

    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function moveSnake() {
    switch (snakeDirection) {
        case 'up':
            snakeY -= 20;
            break;
        case 'down':
            snakeY += 20;
            break;
        case 'left':
            snakeX -= 20;
            break;
        case 'right':
            snakeX += 20;
            break;
    }

    checkCollision();
    
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
}

function checkCollision() {
    if (snakeX < 0 || snakeX >= 300 || snakeY < 0 || snakeY >= 300) {
        gameOver();
    }

    if (snakeX === foodX && snakeY === foodY) {
        createFood();
    }
}

function changeDirection(event) {
    switch (event.key) {
        case 'ArrowUp':
            snakeDirection = 'up';
            break;
        case 'ArrowDown':
            snakeDirection = 'down';
            break;
        case 'ArrowLeft':
            snakeDirection = 'left';
            break;
        case 'ArrowRight':
            snakeDirection = 'right';
            break;
    }
}

function gameOver() {
    alert('Game Over!');
    snakeX = 0;
    snakeY = 0;
    snakeDirection = 'right';
    startGame();
}

startGame();
