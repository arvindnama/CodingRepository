/*
Given an undirected graph and a number m, determine if the graph can be colored with at most m colors such
that no two adjacent vertices of the graph are colored with same color. 
Here coloring of a graph means assignment of colors to all vertices.

Input:
1) A 2D array graph[V][V] where V is the number of vertices in graph and graph[V][V] 
  is adjacency matrix representation of the graph. A value graph[i][j] is 1 if there is a direct edge from i to j, 
  otherwise graph[i][j] is 0.
2) An integer m which is maximum number of colors that can be used.

Output:
An array color[V] that should have numbers from 1 to m. 
color[i] should represent the color assigned to the ith vertex. 
The code should also return false if the graph cannot be colored with m colors.
*/

let mColorProblem = (g , m) =>{
  let verCount = g.length;
  let color = [];
  let isSafe = (v , c)=>{
    for(let i = 0;i <verCount; i++){
      if(g[v][i] === 1 && color[i] === c){
        return false;
      }
    }
    return true;
  };
  let colorVertex = (v)=>{
    if(v === verCount) return true;
    for(let c = 1; c <=m; c++){
      if(isSafe(v,c)){
        color[v] = c;
        if(colorVertex(v+1)){
          return true;
        }
        color[v] = -1;
      }
    }
    return false;
  };
  console.log("m color problem::", colorVertex(0) ? "possible": "not possible");
  console.log(color);
};

var g = [
  [0, 1, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [1, 0, 1, 0],
];

mColorProblem(g, 3);