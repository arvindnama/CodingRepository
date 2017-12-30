function ListNode(val) {
  this.val = val;
  this.next = null;
}
var printList = function (head){
  var s = "";
  //var head = h;
  while(head){
    s += (head.val + (head.next ? "-->":""));
    head = head.next;
  }
  console.log(s);
}

var printMiddle= function(h){
  var mid = h;
  while(h && h.next){
    h = h.next.next;
    mid = mid.next;
  }
  return mid.val;
}

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;
r.next = new ListNode(16); r= r.next;
printList(h);
console.log(printMiddle(h));