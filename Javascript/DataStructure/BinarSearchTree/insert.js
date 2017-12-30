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

var insert = function(r , k){
  if(r === null) return new TreeNode(k);
  if(k > r.val) 
     r.right = insert(r.right , k);
  else
    r.left = insert(r.left , k);
  return r;
};

var root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

//console.log(root);
console.log(insert(root , 100));