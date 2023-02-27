/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';

function render() {
    board.forEach(function(mark, index) {
\    squares[index].textContent = mark;
    });
};
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
/*----- functions -----*/
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
 };
