/*
  Hamiltonian Path in an undirected graph is a path that visits each vertex exactly once. 
  A Hamiltonian cycle (or Hamiltonian circuit) is a Hamiltonian Path such that there is an edge (in graph) 
  from the last vertex to the first vertex of the Hamiltonian Path. Determine whether a given graph contains Hamiltonian Cycle or not. 
  If it contains, then print the path. Following are the input and output of the required function.

 Input:
 A 2D array graph[V][V] where V is the number of vertices in graph and graph[V][V] is adjacency matrix representation of the graph. 
 A value graph[i][j] is 1 if there is a direct edge from i to j, otherwise graph[i][j] is 0.

 Output:
 An array path[V] that should contain the Hamiltonian Path. 
 path[i] should represent the ith vertex in the Hamiltonian Path. 
 The code should also return false if there is no Hamiltonian Cycle in the graph.
*/

let hamiltonCycle = (g)=>{
  let path = g.map(()=> -1);
  let vertCount = g.length;
  let isSafe = (v , pos)=>{
    if(g[path[pos-1]][v] === 0){
      return false;
    }
    for(let i = 0 ; i < pos; i++){
      if(path[i] === v){
        return false;
      }
    }
    return true;
  };
  let route = (pos)=>{
    if(pos === vertCount){
      return g[path[pos-1]][path[0]] === 1;
    }
    for(let v = 1; v< vertCount; v++){
      if(isSafe(v , pos)){
        path[pos] = v;
        if(route(pos+1)){
          return true;
        }
        path[pos] = -1;
      }
    }
    return false;
  };
  path[0] = 0;
  let res = route(1);
  console.log("Hamilton cycle::", res ? "possible": "not possible");
  if(res)console.log(path);
};

let g = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1],
  [0, 1, 1, 1, 0],
];
hamiltonCycle(g);

let g2 =  [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
];
hamiltonCycle(g2);