/*
* The N Queen is the problem of placing N chess queens on an N×N chessboard 
* so that no two queens attack each other. 
* For example, following is a solution for 4 Queen problem
* { 0,  1,  0,  0}
  { 0,  0,  0,  1}
  { 1,  0,  0,  0}
  { 0,  0,  1,  0}
*/

var nQueenProblem = function(n){
  let chessBoard = [];
  for(let i = 0 ; i < n; i++){
    chessBoard[i] = [];
    for(let j = 0 ; j < n; j++){
      chessBoard[i][j] = 0;
    }
  }
  let isSafe = (r,c)=>{
    let safe = true;
    for(let i = 0; i < c; i++) {
      if(chessBoard[r][i] === 1){
        return false;
      }
    }
    for(let i = r, j = c;  i>=0 && j>=0; i--, j--){
      if(chessBoard[i][j] === 1){
        return false;
      }
    }
    for(let i = r, j = c;  i< n && j>=0; i++, j--){
      if(chessBoard[i][j] === 1){
        return false;
      }
    }
    return true;
  };
  let placeQueen = (c) =>{
    if(c >= n) return true;
    for(let r = 0; r < n ; r++){
      if(isSafe(r,c)){
        chessBoard[r][c] = 1;
        if(placeQueen(c+1)){
          return true;
        } 
        chessBoard[r][c] = 0;
      }
    }
    return false;
  };

  console.log("n Queens problem::", placeQueen(0) ? "possible": "not possible");
  chessBoard.forEach((e)=>console.log(e));

};

nQueenProblem(4);