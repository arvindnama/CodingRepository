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
var insert = function(head , n){
  var node = new ListNode(n);
  if(head === null) {head = node; return head;}
  if(n <= head.val ){node.next = head; head = node; return head;}
  var prev = null , current = head;
  while(current!==null){
    if(n > current.val){
      prev = current;
      current = current.next;
    }else{
      break;
    }
  }
  prev.next = node;
  if(current){
    node.next = current;
  }
  return head;
};

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;

printList(insert(h , 1));
