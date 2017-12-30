const  {Node , Graph} = require('./_datastructure');

var BFSTraversal = function(g , s){
  var visited = [];
  var queue = [];
  queue.push(s);
  var travesalStr = "";
  while(queue.length > 0){
    var node = queue.shift();
    travesalStr += node.val + " ";
    visited.push(node);
    var adjNodes = g.getAdjNodes(node);
    for(var anIdx in adjNodes){
      if(adjNodes.hasOwnProperty(anIdx)){
        var adjNode = adjNodes[anIdx];
        if(visited.indexOf(adjNode) === -1){
          queue.push(adjNode);
        }
      }
    }
  }
  return travesalStr;
};

var g = new Graph();
var n0 = new Node(0);
var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);

g.addEdge(n0, n1);
g.addEdge(n0, n2);
g.addEdge(n1, n2);
g.addEdge(n2, n0);
g.addEdge(n2, n3);
g.addEdge(n3, n3);

console.log(BFSTraversal(g , n2));