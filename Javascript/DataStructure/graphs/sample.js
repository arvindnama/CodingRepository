const { Graph} = require('./_datastructure');

var g = new Graph(4);

g.addEdge(0, 1 , 1);
g.addEdge(0, 2 , 2);
g.addEdge(1, 2, 3);
g.addEdge(2, 0, 4);
g.addEdge(2, 3, 5);
g.addEdge(3, 3, 6);

g.print();