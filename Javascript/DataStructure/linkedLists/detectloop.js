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

var detectLoop = function(h){
  var h1 = h;
  while(h1 && h){
    h = h.next;
    h1 = h1.next ? h1.next.next : null;
    if(h1 === h)
      return true;
  }
  return false;
};

var h = new ListNode(1);
var r = h.next = new ListNode(2);
var lp = r;
r.next = new ListNode(3); r= r.next;
r.next = new ListNode(4); r= r.next;
r.next = new ListNode(5); r= r.next;
r.next = lp;

console.log(detectLoop(h));