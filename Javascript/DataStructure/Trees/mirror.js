function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var mirror = function(r){
  if(r === null) return null;
  mirror(r.left);
  mirror(r.right);
  var temp = r.left;
  r.left = r.right;
  r.right = temp;
  return r;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

console.log(root);
console.log(mirror(root));