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

var swapNodes = function(h, xVal ,yVal){
  var xPrev, yPrev, x = h, y=h;
  while(h && (x.val !== xVal || y.val !==yVal)){
    if(x.val !== xVal){
      xPrev = x;
      x = x.next;
    }
    if(y.val !== yVal){
      yPrev = y;
      y = y.next;
    }
    h = h.next;
  }
  if(x && x.val === xVal && y && y.val === yVal){
    if(xPrev) {
      xPrev.next = y;
    } else {
      h = y;
    }
    if(yPrev) {
      yPrev.next = x;
    } else {
      h = x;
    }
    var xNext = x.next;
    var yNext = y.next; 
    y.next = xNext;
    x.next = yNext;
  }
  return h;
}


var h = new ListNode(2);
var r = h.next = new ListNode(5);
r.next = new ListNode(7); r= r.next;
r.next = new ListNode(9); r= r.next;
r.next = new ListNode(10); r= r.next;
r.next = new ListNode(15); r= r.next;

printList(h);
h = swapNodes(h, 2, 15);
printList(h);