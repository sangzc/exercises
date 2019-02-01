/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = makeBoard(HEIGHT, WIDTH);

// array of rows, each row is array of cells  (board[y][x]) Array.from({length: height} Array.from(width))

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard(h, w) {
  let board =[];
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  for (let i=0; i<h; i++) {
    let row = Array.from({length: w})
    row.fill(null)
    board.push(row)
  }
  console.log(board)
  return board;
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "board" variable from the item in HTML w/ID of "board"
  const board = document.getElementById("board");

  // TODO: make the top row of the board that the user clicks on 
  const top = document.createElement("tr"); //<tr id="column-top" ></tr>
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);
  top.addEventListener("hover", handleHover);

  for (var x = 0; x < WIDTH; x++) {
    var headCell = document.createElement("td");  //<tr><td id='x'></td></tr>
    headCell.setAttribute("id", x); 
    top.append(headCell);
  }

  board.append(top); //

  // TODO: make the rest of the board based on the given height and width
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    board.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  let cells = 5
  for (let i=HEIGHT-1; i>=0; i--) {
    let currentCell = document.getElementById(`${i}-${x}`).innerHTML
    if (currentCell !== "") {
      cells --
    } 
  }
  if (cells <0) {
    return null;
  } else {
    return cells;
  }
}

/** placeInTable: update DOM to place piece into HTML board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  let player = currPlayer === 1 ? 'p1' : 'p2'
  console.log('yes! im working', player)
  let tableCell = document.getElementById(`${y}-${x}`);
  let piece = document.createElement("div");
  piece.setAttribute('class', `piece ${player}`);
  tableCell.append(piece);
  board[y][x] = currPlayer
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  alert(msg)
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  var x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  var y = findSpotForCol(x);
  if (y === null) {
    console.log("full")
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);
  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // switch players
  // TODO: switch currPlayer 1 <-> 2

  if (currPlayer === 1) {
    currPlayer = 2
  } else {
    currPlayer = 1
  }

}

/** handle hovers */

function handleHover(evt) {
  let x = +evt.target.id
  let tempPiece = document.createElement('div')
  tempPiece.setAttribute('class',`${piece} ${currPlayer}`)
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
        ([y, x]) =>
            y >= 0 &&
            y < HEIGHT &&
            x >= 0 &&
            x < WIDTH &&
            board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        console.log("win!")
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
