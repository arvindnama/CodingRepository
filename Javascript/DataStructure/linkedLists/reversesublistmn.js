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

var reversesublist = function(h , mVal, nVal){
  var cur = h, prev = null, mPrev, m , n, nNext, i =1;
  while(cur && i<=nVal){
    var skip = false;
    if( i === mVal ) { mPrev = prev; m = cur; }
    if( i === nVal ) { n = cur; nNext = cur.next;}
    if( i > mVal && i <= nVal) {
      var temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
      skip = true;
    }
    if(!skip){
      prev = cur;
      cur = cur.next;
    }
    i++;
  }
  if(mPrev) {
    mPrev.next = n; 
  } else {
   h= n;
  }
  m.next = nNext;
  return h;
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
printList(reversesublist(h,1,8));