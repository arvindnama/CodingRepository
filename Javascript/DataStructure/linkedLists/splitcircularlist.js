function ListNode(val) {
  this.val = val;
  this.next = null;
}
var printList = function (h){
  var s = "";
  var head = h;
  while(head.next !== h){
    s +=  head.val+ (head.next ? "-->":"");
    head = head.next;
  }
  console.log(s);
}

var splitCircular= function(h){
  var c =h, m =h, mc = 1;
  while(c.next !== h){
    c = c.next;
    if(mc %2 ===0) m = m.next;
    mc++;
  }
  var l1 = h;
  var l2 = m.next;
  m.next = h;
  c.next = l2;
  printList(l1);
  printList(l2);
}

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;
r.next = h;

printList(h);
splitCircular(h)