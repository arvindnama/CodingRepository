const {Node , Graph} = require('./_datastructure');

var DFS = function(g , s){
  var visited = [];
  var DFSUtil = function(g , s, visited){
    visited.push(s);
    console.log(s + " ");
    var head = g.getAdjNodes(s);
    while(head){
      if(visited.indexOf(head.val) === -1){
        DFSUtil(g, head.val , visited);
      }
      head = head.next;
    }
  };
  DFSUtil(g,s,visited);
};

var g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
//g.print();

DFS(g , 2);