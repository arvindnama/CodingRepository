/*
* A Maze is given as N*N binary matrix of blocks where source block is the upper left most block 
* i.e., maze[0][0] and destination block is lower rightmost block i.e., maze[N-1][N-1]. 
* A rat starts from source and has to reach destination. 
* The rat can move only in two directions: forward and down.
* In the maze matrix, 0 means the block is dead end and 1 means the block can be used in the path from source to destination. 
* Note that this is a simple version of the typical Maze problem. 
* For example: 
* A more complex version can be that the rat can move in 4 directions and a more complex version can be with limited number of moves
*/

let ratInAMaze = function(maze){
  let n = maze.length;
  let path = maze.map((r)=>r.map(()=>0));
  let mX = [0,1], mY=[1,0];
  let isSafe = (x,y)=>(x>=0 && y>=0 && x< n && y <n && maze[x][y] === 1);
  let route = (x,y)=>{
    if(x === n-1 && y === n-1) return true;
    for(let i = 0; i< 2; i++){
      let x1 = x + mX[i], y1 = y + mY[i];
      if(isSafe(x1,y1)){
        path[x1][y1] = 1;
        if(route(x1,y1)){
          return true;
        }else{
          path[x1][y1] = 0;
        }
      }
    }
    return false;
  };
  path[0][0] = 1;
  console.log("Rat In A Maze", route(0,0) ? "possible" :"not possible");
  path.forEach(e => console.log(e));
};

ratInAMaze([
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]);