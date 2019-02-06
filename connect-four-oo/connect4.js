/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.board = []; // array of rows, each row is array of cells  (board[y][x])
    this.currPlayer = 1; // active player: 1 or 2

    this.makeBoard();
    this.makeHtmlBoard();
}
/** makeBoard: create in-JS board structure:
 *   board = array of rows, each row is array of cells  (board[y][x])
 */
  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

/** makeHtmlBoard: make HTML table and row of column tops. */

 makeHtmlBoard() {
  const board = document.getElementById('board');

  // make column tops (clickable area for adding a piece to that column)
  const top = document.createElement('tr');
  top.setAttribute('id', 'column-top');
  top.addEventListener('click', this.handleClick.bind(this));

  for (let x = 0; x < this.width; x++) {
    const headCell = document.createElement('td');
    headCell.setAttribute('id', x);
    top.append(headCell);
  }

    board.append(top);

  // make main part of board
  for (let y = 0; y < this.height; y++) {
    const row = document.createElement('tr');

    for (let x = 0; x < this.width; x++) {
      const cell = document.createElement('td');
      cell.setAttribute('id', `${y}-${x}`);
      row.append(cell);
    }

    board.append(row);
  }
}

/** handleClick: handle click of column top to play piece */

handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  console.log("handleClick this=", this)
  const y = this.findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  this.board[y][x] = this.currPlayer;
  this.placeInTable(y, x);

  // check for tie
  if (this.board.every(row => row.every(cell => cell))) {
    return this.endGame('Tie!');
  }

  // check for win
  if (this.checkForWin()) {
    return this.endGame(`Player ${this.currPlayer} won!`);
  }

  // switch players
  this.currPlayer = this.currPlayer === 1 ? 2 : 1;
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
 findSpotForCol(x) {
  for (let y = this.height - 1; y >= 0; y--) {
    if (!this.board[y][x]) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML board */

 placeInTable(y, x) {
  const piece = document.createElement('div');
  piece.classList.add('piece');
  piece.classList.add(`p${this.currPlayer}`);
  piece.style.top = -50 * (y + 2);

  const spot = document.getElementById(`${y}-${x}`);
  spot.append(piece);
}

/** endGame: announce game end */

 endGame(msg) {
  alert(msg)
  top.removeEventListener('click');
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */
 checkForWin() {
  function _win(cells, height, width, board, currPlayer) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < height &&
        x >= 0 &&
        x < width &&
        board[y][x] === currPlayer
    );
  }

  for (let y = 0; y < this.height; y++) {
    for (let x = 0; x < this.width; x++) {
      // get "check list" of 4 cells (starting here) for each of the different
      // ways to win
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      // find winner (only checking each win-possibility as needed)
      if (_win(horiz, this.height, this.width, this.board, this.currPlayer) || _win(vert, this.height, this.width, this.board, this.currPlayer) || _win(diagDR, this.height, this.width, this.board, this.currPlayer) || _win(diagDL, this.height, this.width, this.board, this.currPlayer)) {
        return true;
      }
    }
  }
}

} 

class Player {
  constructor (color) {
    this.color = color;
  }
  
}

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function() {
  new Game(6,7);
})