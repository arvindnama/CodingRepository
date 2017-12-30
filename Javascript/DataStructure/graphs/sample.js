var GraphLib = require('./_datastructure');
var Node = GraphLib.Node;
var Graph = GraphLib.Graph;

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
console.log(JSON.stringify(g.adjNodes));