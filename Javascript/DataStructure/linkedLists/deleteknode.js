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
  if(k === 1) return h.next;
  let prev = null, temp = h;
  while(k > 1 && temp){
    prev = temp;
    temp = temp.next;
    k--;
  }
  prev.next = temp ? temp.next : null;
  return h;
};

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;
printList(h);

printList(deleteKNode(h,6));
