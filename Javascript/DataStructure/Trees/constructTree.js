function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var inorder = function(node){
  if(!node) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
};
var dfs = function(node){
  var queue = [];
  queue.push(node);
  while(queue.length !== 0){
    var n = queue.shift();
    console.log(n.val);
    if(n.left) queue.push(n.left);
    if(n.right) queue.push(n.right);
  }
}
var indexOf = function(arr , s , e ,d){
  for(var i =s ; i <= e; i++){
    if(arr[i] === d){
      
      return i;
    }
  }
  return -1;
}
var preIdx = 0;
var buildTree = function(preO, inO , s , e){
  var d = preO[preIdx++]
  if(s > e) return null;
  var root = new TreeNode(d);
  if(s===e) return root;
  
  var idx = indexOf(inO , s , e , root.val);
  root.left = buildTree( preO ,inO, s , idx - 1);
  root.right = buildTree(preO, inO  , idx + 1 , e);
  return root;
};

dfs(buildTree(['A','B','D','E','C','F'],['D','B','E','A','F','C'],0,5));
