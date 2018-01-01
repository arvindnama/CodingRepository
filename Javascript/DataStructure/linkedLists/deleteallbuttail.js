 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

 let printList = function (head){
  let s = "";
  while(head){
    s += (head.val + (head.next ? "-->":""));
    head = head.next;
  }
  console.log(s);
};

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let deleteNode = function(node) {
  while(node.next){
      let temp = node.next;
      node.next = null;
      //delete node;
      node = temp;
  }
  return node;
};

let h = new ListNode(2);
let r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;

printList(h);
printList(deleteNode(h));