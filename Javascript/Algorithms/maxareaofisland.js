

var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  let visited = [];
  grid.forEach( (e,idx) => {
    visited[idx] = [];
    e.forEach((f , jdx)=>visited[idx][jdx] = false);
  });
  let area = (r,c)=>{
    if(
      r<0 || r >= grid.length || 
      c < 0 || c>= grid[0].length || 
      visited[r][c] ||
      grid[r][c] === 0
    ){
      return 0;
    }
    visited[r][c] = true;
    return(1 + area(r-1,c) + area(r+1,c) + area(r , c-1)+ area(r,c+1)); 
  };
  for(let r = 0; r< grid.length; r++){
    for(let c=0; c<grid[0].length; c++){
      maxArea = Math.max(maxArea , area(r,c));
    }
  }
  return maxArea;
};

console.log(maxAreaOfIsland([
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]])
);