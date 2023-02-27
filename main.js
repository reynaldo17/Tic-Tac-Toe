/*----- constants -----*/

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;

function render() {
    board.forEach(function(mark, index) {
    squares[index].textContent = mark;
    });
    messages.textContent = `It's ${turn}'s turn!`;
};

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
 };

 function handleTurn() {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;
    // This is tidy
    turn = turn === 'X' ? 'O' : 'X';
    // In an if statement it would look like: 
    // if (turn === 'X') {
    // turn = 'O' 
    // } else {
    // turn = 'X' 
    // };
    // writing the ternary saved you from all that. 
    render();
};
