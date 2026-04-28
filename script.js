
document.addEventListener('DOMContentLoaded', () => {
    renderBoard();
});

let xTurn = true;
let gameOver = false;
let board = new Array(9).fill('.');
let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function drawXorO(spot, ind) {

    if (spot.textContent !== '.' || gameOver) {
        return;
    }
    
    if (xTurn) {
        spot.textContent = 'X';
        board[ind] = 'X';
        xTurn = false;
    } else {
        spot.textContent = 'O';
        board[ind] = 'O';
        xTurn = true;
    }

    checkWinner();
}

function clearGame() {
    board.fill('.');
    let tds = document.querySelectorAll('td');
    tds.forEach(td_update);
    location.reload();
}

function td_update(td, ind) {
    td.textContent = board[ind];
}

function renderBoard() {
    let tds = document.querySelectorAll('td');
    tds.forEach(td_update);
}

function checkWinner() {

    for (let win of winning) {
        let [a, b, c] = win;

        if (board[a] !== '.' && board[a] === board[b] && board[b] === board[c]) {
            gameOver = true;
            let winner = board[a];
            document.querySelector(".winner").innerHTML = `Winner is ${winner}`;
            document.querySelector('button').innerHTML = 'Play Again';

            return;
        }
    }
}
