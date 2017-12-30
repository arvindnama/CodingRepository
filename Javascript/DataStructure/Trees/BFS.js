function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Iterative.
var preorder = function(root){
  var stack = [];
  var node = root;
  while(node){
    console.log(node.val);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
    node = stack.pop();
  }
};

var preorderR = function(root){
  if(!root) return;
  console.log(root.val);
  preorderR(root.left);
  preorderR(root.right);
};

// L Ro R
var inorder = function(root){
  var stack = [];
  var n = root;
  while(stack.length > 0 || n){
    if(n){
      stack.push(n);
      n = n.left;
    } else {
      n = stack.pop();
      console.log(n.val);
      n = n.right;
    }
  }
};


var inorderR = function(root){
  if(!root) return;
  inorderR(root.left);
  console.log(root.val);
  inorderR(root.right);
}

var portOrderR = function(root){
  if(!root) return;
  portOrderR(root.left);
  portOrderR(root.right);
  console.log(root.val);
};

var postOrder = function(root){
  var s1 = [];
  var s2 = [];
  s1.push(root);
  while(s1.length > 0){
    var n = s1.pop();
    s2.push(n);
    if(n.left) s1.push(n.left);
    if(n.right) s1.push(n.right);
  }
  while(s2.length > 0){
    console.log(s2.pop().val);
  }
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

postOrder(root);