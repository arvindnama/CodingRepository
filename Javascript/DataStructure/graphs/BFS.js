const  {Node , Graph} = require('./_datastructure');

var BFSTraversal = function(g , s){
  var visited = [];
  var queue = [];
  queue.push(s);
  var travesalStr = "";
  while(queue.length > 0){
    var vert = queue.shift();
    travesalStr += vert + " ";
    visited.push(vert);
    var head = g.getAdjNodes(vert);
    while(head){
      if(visited.indexOf(head.val) === -1){
        queue.push(head.val);
      }
      head = head.next;
    }
  }
  return travesalStr;
};

var g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log(BFSTraversal(g , 2));