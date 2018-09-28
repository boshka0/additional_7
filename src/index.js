module.exports = sudoku;

function sudoku(matrix) {
  var sudo = [...matrix];
  if (sudokuSolver(sudo, 0, 0)) {
    return sudo;
  }
}

function filled(matrix, i, j, val) {
  for (var row = 0; row < 9; row++) {
    if (matrix[row][j] === val) {
      return false;
    }
  }

  for (var col = 0; col < 9; col++) {
    if (matrix[i][col] === val) {
      return false;
    }
  }
  
  var row = Math.floor(i / 3) * 3;
  var col = Math.floor(j / 3) * 3;  

  for (var a = row; a < row + 3;  a++) {
    for (var b = col; b < col + 3; b++) {
      if (matrix[a][b] === val) {
        return false;
      }
    }
  }  
  return true;
}

function sudokuSolver(matrix, i, j) {
  if (i === 9) {
    i = 0;
    j = j + 1;
    if (j === 9) {
      return true;
    }
  }
    
  if (matrix[i][j] != 0) {
    return sudokuSolver(matrix, i+1, j);
  }

  for (var val = 1; val <= 9; val++) {    
    if (filled(matrix, i, j, val)) {
      matrix[i][j] = val;
      if (sudokuSolver(matrix, i+1, j)) {
        return true;
      } 
    }  
  }

  matrix[i][j] = 0;
  return false;
}