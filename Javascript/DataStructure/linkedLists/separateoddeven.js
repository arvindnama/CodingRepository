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

var separateOddEven = function(h){
  var e = new ListNode(0), o = new ListNode(0), e1 = e , o1 = o , c=h;
  while(c !== null){
    var t = c.next;
    if(c.val % 2 === 0 ){
      e.next = c;
      e = e.next;
    } else {
      o.next = c;
      o = o.next;
    }
    c.next = null; // break the chain.
    c = t;
  }
  h = e1.next;
  if(e) e.next = o1.next; 
  return h;
}

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(4); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(6); r= r.next;
r.next = new ListNode(7); r= r.next;

printList(h);
printList(separateOddEven(h));