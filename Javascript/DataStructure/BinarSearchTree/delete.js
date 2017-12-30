function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var findMin= function(r , k){
  var root = r;
  while(root.left !== null){
    root = root.left;
  }
  return root;
}

var deleteNode = function(root , k){
  if(root === null) return null;
  if( k > root.val){
    root.right = deleteNode(root.right , k);
  }else if(k < root.val){
    root.left = deleteNode(root.left , k);
  }else{
    if(!root.left){
      return root.right;
    }else if(!root.right){
      return root.left;
    }else{
      var min = findMin(root.right);
      root.val = min.val;
      root.right = deleteNode(root.right , min.val);
    }
  }
  return root;
};

var root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);
console.log(deleteNode(root , 50));