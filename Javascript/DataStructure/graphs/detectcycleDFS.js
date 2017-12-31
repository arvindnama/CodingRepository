const {Graph} = require('./_datastructure');

var isCycle = function(g){
  var visited=[];
  var recStack =[];
  for (const v of g.getVerticies()) {
    visited[v] = recStack[v] = false;
  }
  var hasCycleInVertex = function(v){
    if(visited[v] === false){
      visited[v] = true;
      recStack[v] = true;
      var head = g.getAdjNodes(v);
      while(head){
        let destV = head.val;
        if(!visited[destV] && hasCycleInVertex(destV)){
          return true;
        } else if(recStack[destV]){
          return true;
        }
        head = head.next;
      }
    }
    recStack[v] = false;
    return false;
  };
  for (const v of g.getVerticies()) {
    if(hasCycleInVertex(v)){
      return true;
    }
  }
  return false;
};
var g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
g.print();

console.log(isCycle(g));