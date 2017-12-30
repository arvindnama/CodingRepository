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

var findIntersection = function(h1 , h2){
  var h1Temp = h1;
  var h2Temp = h2;
  var h1Count =0;
  while(h1Temp.next !== null) {h1Count++; h1Temp = h1Temp.next;}
  h1Count++;
  h1Temp.next = h1; // create loop;

  for(var i = 0 ; i< h1Count;i++){
    h2Temp = h2Temp.next;
  }
  while(h2Temp !== h2){
    h2Temp = h2Temp.next; 
    h2 = h2.next;
  }
  h1Temp.next = null; // remove loop;
  return h2 ? h2.val : -1;
}


var h1 = new ListNode(3);
var h2 = new ListNode(10);
h2.next = new ListNode(12);
var r = h1.next = new ListNode(6);
r.next = new ListNode(9); r= r.next;
h2.next.next = r.next = new ListNode(15); r= r.next;
r.next = new ListNode(30); r= r.next;

console.log(findIntersection(h1,h2));