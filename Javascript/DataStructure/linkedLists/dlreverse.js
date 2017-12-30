function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
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
  var p,c=h;
  while(c){
    var t = c.next;
    c.next = p;
    c.prev = t;
    p = c;
    c = t;
  }
  h = p;
  return h;
};

var reverseR = function(h){
  if(h.next === null) {
    h.prev = null;
    return h;
  }
  var h1 = reverseR(h.next);
  h.prev = h.next;
  h.next.next = h;
  h.next = null;
  return h1;
};

var h = new ListNode(2);
var r = h.next = new ListNode(5); r.prev= h;
r.next = new ListNode(7); r.next.prev =r; r= r.next;
r.next = new ListNode(9); r.next.prev =r;r= r.next;
r.next = new ListNode(10); r.next.prev =r;r= r.next;
r.next = new ListNode(15); r.next.prev =r;r= r.next;

printList(h);
printList(reverseR(h));