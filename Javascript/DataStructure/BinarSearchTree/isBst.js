function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var isBST = function(r){
  if(r === null) return true;
  if(!(r.left.val && r.val > r.left.val)){
    return false;
  }
  if(!(r.right.val && r.val < r.right.val) ){
    return false;
  }
  if (!isBST(r.left) || !isBST(r.right)){
    return false;
  }
  return true;
};