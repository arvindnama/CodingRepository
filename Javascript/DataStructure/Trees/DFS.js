function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var dfs= function(root){
  var queue = [];
  var node = root;
  while(node) {
    console.log(node.val);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
    node = queue.shift();
  }
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

dfs(root);