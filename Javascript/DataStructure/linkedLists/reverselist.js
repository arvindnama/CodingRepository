function ListNode(val) {
  this.val = val;
  this.next = null;
}
var printList = function (head){
  var s = "";
  while(head ){
    s += (head.val + (head.next ? "-->":""));
    head = head.next;
  }
  console.log(s);
}

var reverse = function(h){
  var current = h, prev = null, next= null;
  while(current!==null){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  h = prev;
  return h;
}

var reverseR = function(h){
  if(h.next === null) return h;
  var h1 = reverse(h.next);
  h.next.next = h;
  h.next= null;
  return h1;
}

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;

printList(h);
h = reverseR(h);
printList(h);