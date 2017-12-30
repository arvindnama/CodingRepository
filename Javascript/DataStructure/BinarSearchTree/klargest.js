function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var c = 0;
var klargest = function(root , k){
  if(root === null) return null;
  klargest(root.right,k);
  c++;
  if(c === k){
    console.log(k , 'largest', root.val);
  }
  klargest(root.left,k);
};


var root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

//klargest(root, 1);
/*
klargest(root, 2);
klargest(root, 3);
klargest(root, 4);
*/
klargest(root, 5);
