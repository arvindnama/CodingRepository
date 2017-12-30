  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) return 0;
  if(!root.left && !root.right) return 1;
  var lD = minDepth(root.left);
  var rD = minDepth(root.right);
  if(lD === 0) return rD + 1;
  else if(rD === 0) return lD + 1;
  else return (Math.min(minDepth(root.left),minDepth(root.right)) + 1)
   
};