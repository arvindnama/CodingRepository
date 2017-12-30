const {Node , Graph} = require('./_datastructure');

var DFS = function(g , s){
  var visited = [];
  var DFSUtil = function(g , s, visited){
    visited.push(s);
    console.log(s.val + " ");
    var adjNodes = g.getAdjNodes(s);
    for(var idx in adjNodes){
      if(adjNodes.hasOwnProperty(idx) && visited.indexOf(adjNodes[idx]) === -1){
        DFSUtil(g, adjNodes[idx] , visited);
      }
    }
  };
  DFSUtil(g,s,visited);
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

DFS(g , n2);