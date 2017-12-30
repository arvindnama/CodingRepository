const {Graph} = require('./_datastructure');

var topologicalsort = function(g){
  var stack = [];
  var visited = [];
  var util = function(vert){
    visited[vert] = true;
    var head = g.getAdjNodes(vert);
    while(head){
      if(!visited[head.val]){
        util(head.val);
      }
      head = head.next;
    }
    stack.push(vert);
  };
  for(var vert of g.getVerticies()){
    if(!visited[vert]){
      util(vert);
    }
  }
  while(stack.length > 0){
    console.log(stack.pop());
  }
};

var g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

topologicalsort(g);