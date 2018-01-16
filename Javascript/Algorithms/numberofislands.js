

var numIslands = function(grid) {
  let rows = grid.length;
  let columns = grid[0].length;
  let traverse = (r,c)=>{
    grid[r][c] = 0;
    if( r-1 >= 0 && grid[r -1][c] ===1) traverse(r-1,c);
    if( r+1 < rows && grid[r+1][c] ===1) traverse(r+1,c);
    if( c-1 >= 0 && grid[r][c-1] ===1) traverse(r,c-1);
    if( c+1 < columns && grid[r][c+1] ===1) traverse(r,c+1);
  };
  let noOfIslands = 0;
  for(let r = 0; r< grid.length; r++){
    for(let c=0; c<grid[0].length; c++){
      if(grid[r][c] === 1){
        noOfIslands++;
        traverse(r,c);
      }
    }
  }
  return noOfIslands;
};

console.log(numIslands([
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]])
);