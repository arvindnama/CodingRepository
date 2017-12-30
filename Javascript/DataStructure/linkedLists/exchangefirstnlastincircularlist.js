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

var exchange = function(h){
  var prev = h;
  var next = h.next;
  while(next.next!==h){prev = next; next = next.next;}
  prev.next = h;
  next.next = h.next;
  h.next = next;
  h = next;
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

printList(exchange(h),6);