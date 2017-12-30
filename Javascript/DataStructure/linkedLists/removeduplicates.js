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
var removeDup = function(h){
  var temp = h;
  while(temp.next!==null){
    if(temp.val === temp.next.val){
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }  
};

var h = new ListNode(11);
var r = h.next = new ListNode(11);
r.next = new ListNode(11); r= r.next;
r.next = new ListNode(11); r= r.next;
r.next = new ListNode(21); r= r.next;
r.next = new ListNode(43); r= r.next;
r.next = new ListNode(43); r= r.next;
r.next = new ListNode(60); r= r.next;

printList(h);
removeDup(h);
printList(h);