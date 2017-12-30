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
var mergeKLists = function(lists) {
  var mergeListR = function(lists , start , end){
      var len = (end - start);
      if(start === end) return lists[start];
      var m2= Math.floor(len/2);
      var end1 = start + m2;
      var start2 = start + m2 + 1;
      var l1 = mergeListR(lists , start , end1);
      var l2 = mergeListR(lists , start2 , end);
      var dummy, l3 = new ListNode(0); //dummy node
      dummy = l3;
      while(l1 && l2){
          if(l1.val < l2.val){
              l3.next = l1;
              l1 = l1.next;
          } else{
              l3.next = l2;
              l2 = l2.next;
          }
          l3 = l3.next;
      }
      if(l1){l3.next = l1;}
      if(l2){l3.next = l2;}
      return dummy.next;
  }
   var res = null;
   if(lists.length > 0)
       res =mergeListR(lists , 0 , lists.length-1);
  return res;
};

var h = new ListNode(1);
var r = h.next = new ListNode(2);
r.next = new ListNode(3); r= r.next;

var h2 = new ListNode(4); 
r= h2.next = new ListNode(5); 
r.next = new ListNode(6); r= r.next;

printList(h);
printList(h2);
printList(mergeKLists([h,h2]));