function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var dfs= function(root){
  var queue = [];
  var node = root;
  var s = '';
  while(node) {
    s += ' '+ node.val;
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
    node = queue.shift();
  }
  console.log(s);
}
var search = function(r , k){
  if(r === null) return null;
  if(r.val === k) return r;
  if(k > r.val) 
    return search(r.right, k);
  else  
    return search(r.left , k);
}


var root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

dfs(root);
console.log(search(root , 50));