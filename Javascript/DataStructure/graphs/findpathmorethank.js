const {Graph} = require('./_datastructure');

var findPath = function(g , s , k){
  var visited = [];
  var findR = function(v, w , cost){
    if(visited.indexOf(v) !== -1) return false;
    if(w + cost >= k) return true;
    visited.push(v);
    cost = cost + w;
    var adjN = g.getAdjNodes(v);
    while(adjN){
      if(findR(adjN.val , adjN.weight, cost)){
        return true;
      }
      adjN = adjN.next;
    }
    visited.splice(visited.indexOf(v),1);
    cost = cost - w;
    return false;
  };
  return findR(s ,0, 0);
};

var matrix=[
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0]
];
var g = new Graph(9);
for(var i = 0 ; i < 9 ; i++){
  for(var j = 0 ; j < 9 ; j++){
    if(matrix[i][j]!== 0){
      g.addEdge(i,j,matrix[i][j]);
    }
  }
}

console.log(findPath(g , 0 , 62));