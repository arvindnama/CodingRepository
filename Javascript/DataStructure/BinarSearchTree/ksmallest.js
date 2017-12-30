function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var c = 0;
var kSmallest = function(root , k){
  if(root === null) return null;
  kSmallest(root.left,k);
  c++;
  if(c === k){
    console.log(k , 'Smallest', root.val);
  }
  kSmallest(root.right,k);
};

var root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

kSmallest(root, 2);