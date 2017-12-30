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

var pairwiseswap = function(h){
 var i =0 , cur = h , prev= null;
 while(cur && i < 2){
   var t = cur.next;
   cur.next = prev;
   prev = cur;
   cur = t;
   i++;
 }
 if(cur){
   h.next = pairwiseswap(cur);
 }
 return prev;
};

var h = new ListNode(1);
var r = h.next = new ListNode(2);
r.next = new ListNode(3); r= r.next;
r.next = new ListNode(4); r= r.next;
r.next = new ListNode(5); r= r.next;
r.next = new ListNode(6); r= r.next;
r.next = new ListNode(7); r= r.next;

printList(h);
printList(pairwiseswap(h));
