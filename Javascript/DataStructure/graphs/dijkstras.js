
  const {Graph} = require('./_datastructure');

  var dijkstraSP = function(g , s){
    var shortestPath = {};
    var done = [];
    var distance = [];
    for (const v of g.getVerticies()) {
      distance[v] = v === s ? 0 : Number.MAX_VALUE;
      shortestPath[v] = `${s}`;
    }
    var minVertex = function(){
      var min = Number.MAX_VALUE;
      var minVertex = -1;
      distance.forEach((v , idx)=>{
        if(v <= min && done.indexOf(idx) === -1){
          min = v;
          minVertex = idx;
        }
      });
      return minVertex;
    };
    var ver = minVertex();
    while(ver !== -1){
      done.push(ver);
      var head = g.getAdjNodes(ver);
      while(head){
        var adjVert = head.val;
        var adjVertW = head.weight;
        if((distance[ver] + adjVertW)< distance[adjVert]){
          distance[adjVert] = distance[ver] + adjVertW;
          shortestPath[adjVert] = `${shortestPath[ver]}->${adjVert}`;//[${distance[adjVert]}]`;
        }
        head = head.next;
      }
      ver = minVertex();
    }
    return {distance,shortestPath};
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
var {distance , shortestPath} = dijkstraSP(g , 0);
console.log("Shortest distance::",distance);
console.log("Shortest path::",shortestPath);