
var Node = function(val){
  this.val = val;
};
Node.prototype.toString = function(){
  return this.val;
}

var Graph = function(){
  this.adjNodes = {};
};

Graph.prototype = (function(){
  var _addEdge = function(parent , child){
    var addNodes = this.adjNodes[parent];
    if(!addNodes){
      this.adjNodes[parent] = addNodes = [];
    }
    addNodes.push(child);
  };
  
  var _getAdjNodes = function(n){
    return this.adjNodes[n];
  };

  return{
    addEdge: _addEdge,
    getAdjNodes: _getAdjNodes
  };
}());

module.exports  = {
  Graph : Graph,
  Node: Node
};