document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: []
}

function createBoard() {

  var numberOfCells = 36;
  var grid = Math.sqrt(numberOfCells);
  var rCount = 0;
  var cCount = 0;

    for(var i = 0; i < numberOfCells; i++){
      board.cells[i] = {
          count: i,
          row: rCount,
          col: cCount++,
          isMine: Math.random() < 0.25 ? true : false,
          isMarked: false,
          hidden: true,
        }
        cellCount = i+1
        if (cellCount % grid == 0){
          rCount++
          cCount = 0
        }
      }
      return board;
    }

function startGame() {
  createBoard()

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  document.querySelector('.restart-btn').addEventListener('click', restart);
  lib.initBoard()
}

function checkForWin() {

  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === false && board.cells[i].isMarked === true) {
      return;
    } else if (board.cells[i].hidden === true && board.cells[i].isMarked !== true) {
      return;
    }
  }
  let winSound = document.getElementById("win")
  winSound.volume = 0.2;
  winSound.play();
  lib.displayMessage('You win!')
}

function countSurroundingMines(cell) {

  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine == true) {
      count++;
    }
  }

  return count;
}

function restart(){
  document.location.reload();
}