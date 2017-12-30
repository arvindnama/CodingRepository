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

var alternatingSplit = function(h){
  var l1 = new ListNode(0), l2= new ListNode(0);
  var l1D = l1 , l2D =l2;
  var i = true;
  while(h){
   if(i){
    l1.next = h;
    l1 = l1.next;
   } else {
    l2.next = h;
    l2 = l2.next;
   }
   i = !i;
   h = h.next;
 }
 l1.next = null;
 l2.next = null;
 return [l1D.next , l2D.next];
};

var h = new ListNode(0);
var r = h.next = new ListNode(1);
r.next = new ListNode(0); r= r.next;
r.next = new ListNode(1); r= r.next;
r.next = new ListNode(0); r= r.next;
r.next = new ListNode(1); r= r.next;
r.next = new ListNode(0); r= r.next;

printList(h);
var a = alternatingSplit(h);
printList(a[0]);
printList(a[1]);
