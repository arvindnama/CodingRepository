/*
* knight Tour Problem::
* The knight is placed on the first block of an empty board and, 
* moving according to the rules of chess, must visit each square exactly once
*/

let knightTour = function(){
  let mX = [ 2, 1, -1, -2, -2, -1,  1,  2];
  let mY = [1, 2,  2,  1, -1, -2, -2, -1 ];
  let sol = [];
  for (let i = 0; i < 8; i++) {
    sol[i]= [];
    for (let j = 0; j < 8; j++) {
      sol[i][j] = -1;
    }
  }
  
  let isSafe = (x,y)=>(x >= 0 && x < 8 && y >= 0 && y < 8 && sol[x][y] === -1);

  let tour = (x,y,currMove)=>{
    if(currMove === 8*8) return true;
    for (let i = 0; i < 8; i++) {
      let x1 = x + mX[i], y1 = y + mY[i];
      if(isSafe(x1,y1)){
        sol[x1][y1] = currMove;
        if(tour(x1, y1 , currMove+1)){
          return true;
        } else {
          sol[x1][y1] = -1;
        }
      }
    }
    return false;
  };
  sol[0][0] = 0;
  console.log("tour", tour(0,0,1));
  console.log(sol);
};
knightTour();