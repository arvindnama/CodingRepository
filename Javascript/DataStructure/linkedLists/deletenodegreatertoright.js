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
var deleteNodeGreater = function(h){
  var cur = h , prev = null;
  while(cur.next){
    if(cur.val < cur.next.val){
      if(prev){
        prev.next = cur.next;
        prev = cur;
        cur = cur.next;
      } else {
        h = h.next;
        cur = h;
      }
    }else{
      prev = cur;
      cur = cur.next;
    }
  }
  return h;
}

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(6); r= r.next;
r.next = new ListNode(1); r= r.next;
//r.next = new ListNode(10); r= r.next;
//r.next = new ListNode(15); r= r.next;

printList(h);
printList(deleteNodeGreater(h));