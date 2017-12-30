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

var deleteKNode = function(h, k){

  /*var deleteRec = function(p , n, k1){
    if(k1===1) {p.next = n?n.next : null; return;}
    deleteRec(n,n.next,k1-1);
  }
  deleteRec(h,h.next,k-1);*/
  if(k < 1) return h;
  if(h === null) return;
  if(k === 1) return h.next;
  h.next = deleteKNode(h.next, k-1)
};

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;

printList(h);
;
printList(deleteKNode(h,5));