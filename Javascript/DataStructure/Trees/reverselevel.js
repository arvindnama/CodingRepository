function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var printReverselevel = function(r){
  var queue = [];
  queue.push(r);
  var order = "";
  while(queue.length > 0){
    var temp = queue.shift();
    order = temp.val + " " + order;
    if(temp.right) queue.push(temp.right);
    if(temp.left) queue.push(temp.left);
  }
  console.log(order);
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

printReverselevel(root);