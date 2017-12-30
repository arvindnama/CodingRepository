
var GraphNode = function(val ,weight){
  this.val = val;
  this.weight = weight;
  this.next = null;
};
GraphNode.prototype.toString = function(){
  return this.val + this.weight;
};

var Graph = function(vertCount){
  this.vertCount = vertCount;
  this.adjNodes = {};
  for(var i = 0 ; i < vertCount; i++){
    this.adjNodes[i] = {
      head : null,
      end: null
    };
  }
};

Graph.prototype = (function(){
  var _addEdge = function(src , dest , weight){
    var destNode = new GraphNode(dest , weight); 
    var vertex = this.adjNodes[src];
    if(!vertex.end){
      vertex.head = destNode;
      vertex.end = destNode;
    }else{
      vertex.end.next = destNode;
      vertex.end = destNode;
    }
  };
  
  var _getAdjNodes = function(n){
    return this.adjNodes[n].head;
  };
  var _getVerticies = function(){
    return Object.keys(this.adjNodes)
                .filter((k)=>this.adjNodes.hasOwnProperty(k))
                .map((v)=> +v);
  };

  var _printGraph = function (){
    for (const vert of this.getVerticies()) {
      var head = this.getAdjNodes(vert);
      var s = "";
      while(head ){
        var w = head.weight ? `(${head.weight})` : "";
        s += ` ${vert}-${w}->${head.val} `;
        head = head.next;
      }
      console.log(s);
    }
  };

  return{
    addEdge: _addEdge,
    getVerticies:_getVerticies,
    getAdjNodes: _getAdjNodes,
    print: _printGraph
  };
}());




module.exports  = {
  Graph : Graph,
  GraphNode: GraphNode
};
