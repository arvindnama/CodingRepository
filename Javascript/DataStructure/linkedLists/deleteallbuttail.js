 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

 var printList = function (head){
  var s = "";
  while(head){
    s += (head.val + (head.next ? "-->":""));
    head = head.next;
  }
  console.log(s);
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  while(node.next){
      var temp = node.next;
      node.next = null;
      node = temp;
  }
  return node;
};

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;

printList(h);
printList(deleteNode(h));