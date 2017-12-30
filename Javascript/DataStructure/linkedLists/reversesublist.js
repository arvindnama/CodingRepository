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

var reversesublist = function(h , k){
  var i = 0, cur = h , prev =null;
  while(cur && i<k){
    var temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
    i++;
  }
  if(cur){
    h.next = reversesublist(cur,k);
  }
  return prev;
}

var h = new ListNode(1);
var r = h.next = new ListNode(2);
r.next = new ListNode(3); r= r.next;
r.next = new ListNode(4); r= r.next;
r.next = new ListNode(5); r= r.next;
r.next = new ListNode(6); r= r.next;
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(8); r= r.next;

printList(h);
printList(reversesublist(h,2));