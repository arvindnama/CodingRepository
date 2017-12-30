function ListNode(val) {
  this.val = val;
  this.next = null;
}
var printList = function (head,n){
  var s = "";
  var i = 0;
  while(head && i<n){
    i++;
    s += (head.val + (head.next ? "-->":""));
    head = head.next;
  }
  console.log(s);
}

var reverseCircular = function(h){
  var current = h.next, prev = h, next=current;
  while(current!==h){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  h.next = prev;
  h = prev;
  return h;
}

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;
r.next = h;

printList(h,6);
printList(reverseCircular(h),6)