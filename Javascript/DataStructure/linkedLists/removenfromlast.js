function ListNode(val) {
  this.val = val;
  this.next = null;
}
var printList = function (head){
  var s = "";
  //var head = h;
  while(head){
    s += (head.val + (head.next ? "-->":""));
    head = head.next;
  }
  console.log(s);
}

var removeNFromLast= function(h,n){
  var nNode = h;
  var prev;
  for(var i = 0;i < n ;i++){
    nNode = nNode.next;
  }
  var temp = h;
  while(nNode){
    prev = temp;
    temp = temp.next;
    nNode= nNode.next;
  }
  if(prev){ 
    prev.next = temp.next;
  } else {
    h = h.next;
  }
  return h;
}

var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;
r.next = new ListNode(16); r= r.next;
printList(h);
printList(removeNFromLast(h , 3));