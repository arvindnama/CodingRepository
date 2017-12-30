function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var calculate = function(r){
  if(r === null)return null;
  calculate(r.left);
  calculate(r.right);
  if(!r.left && !r.right){
    return r;
  }
  r.val = (r.left ? r.left.val: 0) + (r.right ? r.right.val : 0);
  return r;
};


var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

console.log(calculate(root));