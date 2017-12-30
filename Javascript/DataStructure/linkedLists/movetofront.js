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

var moveToFront = function(h){
  var prev = h;
  var next = h.next;
  while(next.next !== null){
    prev = next;
    next = next.next;
  }
  prev.next = null;
  next.next = h;
  h = next;
  return h;
};

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;

printList(h);

printList(h = moveToFront(h));
printList(h = moveToFront(h));
printList(h = moveToFront(h));
printList(h = moveToFront(h));