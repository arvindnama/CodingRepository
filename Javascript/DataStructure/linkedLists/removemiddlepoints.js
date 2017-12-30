function ListNode(x,y) {
  this.x = x;
  this.y = y;
  this.next = null;
}
var printList = function (head){
  var s = "";
  while(head){
    s += ( "(" + head.x + "," + head.y +")"+ (head.next ? "-->":""));
    head = head.next;
  }
  console.log(s);
}
var removeMiddlePoints = function(h){
  var c = h , s= h, d=0;
  var getDir = function(x,x1){
    return x.x === x1.x ? 0 : 1;
  }
  while(c.next){
    if(getDir(c , c.next) !== d){
      if(c!==s){
        s.next = c;
        s = c;
      }
      d = d + 1 % 2;
    }
    c = c.next;
  }
  s.next =c;
  return h;
}

var h = new ListNode(0,10);
var r = h.next = new ListNode(1,10);
r.next = new ListNode(5,10); r= r.next;
r.next = new ListNode(7,10); r= r.next;
r.next = new ListNode(7,6); r= r.next;
r.next = new ListNode(7,5); r= r.next;
r.next = new ListNode(20,5); r= r.next;
r.next = new ListNode(40,5); r= r.next;

printList(h);
printList(removeMiddlePoints(h));