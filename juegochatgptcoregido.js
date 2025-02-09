/**
 * HTML5 ELEMENTOS => DEFINIR VARIABLES
*/

const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("start");
const gameOverSign = document.getElementById("gameOver");

/**
 * GAME SETTINGS
*/

const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1
}

/**
 * GAME VARIABLES
*/

let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const createBoard = () => {
    boardSquares.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            const squareValue = `${rowIndex} ${columnIndex}`;
            const squareElement = document.createElement("div");
            squareElement.setAttribute("class", "square emptySquare");
            squareElement.setAttribute("id", squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);
        });
    });
};

const setGame = () => {
    snake = ["00", "01", "02", "03"];
    score = snake.length;
    direction = "ArrowRight";
    boardSquares = Array.from({ length: boardSize }, () => new Array(boardSize).fill(squareTypes.emptySquare));
    board.innerHTML = "";
    emptySquares = [];
    createBoard();
};

const startGame = () => {
    setGame();
};

startButton.addEventListener("click", startGame);

