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

var searchRecursive = function(h, k){
   if(h === null) return false;
   if(h.val === k) return true;
   console.log("research " + h.val);
   return searchRecursive(h.next,k);
};


var searchIterative = function(h,k){
  if(h === null) return false;
  if(h.val === k) return true;
  while(h && h.val !== k){
    h = h.next;
  }
  return h ? true : false;
};


var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;

printList(h);
var h1 = h;
var h2 = h;
console.log("SearchR::" + searchRecursive(h , 5));
console.log("SearchI::" + searchIterative(h,30));