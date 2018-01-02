
let solveSudoku = (g)=>{
  let M = g.length;
  let nextSpot = ()=>{
    for(let i = 0 ; i < M; i ++){
      for(let j = 0 ; j < M; j++){
        if(g[i][j] === 0){
          return { x: i , y: j};
        }
      }
    }
    return { x: -1 , y: -1};
  };
  let foundInRow = (r , v)=>{
    for(let c = 0; c < M; c++){
      if(g[r][c] === v){
        return true;
      }
    }
    return false;
  };
  let foundInCol = (c , v)=>{
    for(let r = 0; r < M; r++){
      if(g[r][c] === v){
        return true;
      }
    }
    return false;
  };
  
  let foundInBox = (sr, sc, v)=>{
    for(let r = 0; r < 3; r++){
      for(let c = 0; c < 3; c++){
        if(g[r + sr][c + sc] === v){
          return true;
        }
      }
    }
    return false;
  };

  let isSafe = (r , c, v)=>{
    return !foundInRow(r,v) && 
      !foundInCol(c,v) && 
      !foundInBox(r - r % 3 , c - c % 3 , v);
  };

  let solve = ()=>{
    let {x , y} = nextSpot();
    if(x === -1 && y === -1) return true;
    for(let v = 1; v <=M ; v++){
      if(isSafe(x,y, v)){
        g[x][y] = v;
        if(solve()){
          return true;
        }
        g[x][y] = 0;
      }
    }
    return false;
  };
  let res = solve();
  console.log("Sudoku::", res ? "possible": "not possible");
  if(res)console.log(g);
};

var g = [
  [3, 0, 6,  5, 0, 8,  4, 0, 0],
  [5, 2, 0,  0, 0, 0,  0, 0, 0],
  [0, 8, 7,  0, 0, 0,  0, 3, 1],

  [0, 0, 3,  0, 1, 0,  0, 8, 0],
  [9, 0, 0,  8, 6, 3,  0, 0, 5],
  [0, 5, 0,  0, 9, 0,  6, 0, 0],
  
  [1, 3, 0,  0, 0, 0,  2, 5, 0],
  [0, 0, 0,  0, 0, 0,  0, 7, 4],
  [0, 0, 5,  2, 0, 6,  3, 0, 0]
];
solveSudoku(g);

/*
var g2 = [];
for(let i = 0 ; i < 9 ; i++){
  g2[i] = [];
  for(let j = 0 ; j < 9 ; j++){
    g2[i][j] = 0;
  }
}
solveSudoku(g2);
*/