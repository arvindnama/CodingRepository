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

var detectNRemove = function(h){
  var cur = h , cur2 = h;
  while(cur !== null && cur2!==null){
    cur = cur.next;
    cur2 = cur2.next.next;
    if(cur === cur2){
      break;
    }
    
  }
  if(cur === cur2 && cur !== null){
    // loop detected.
    removeLoop2(cur , h);
    return true;
  }
  return false;
};
var removeLoop2 = function(loopNode , h){
  var loopLength = 1;
  var temp = loopNode.next;

  while(temp.next !== loopNode) {     
    loopLength++; 
    temp= temp.next;
  }
  var looptemp = h;
  
  for(var i = 0; i <= loopLength; looptemp = looptemp.next , i++);
  console.log("loopNext "+looptemp.val);
  while(h !== looptemp){
   // console.log("loopTemp "+looptemp.val + " h "+h.val);
    h = h.next;
    looptemp = looptemp.next;
  }
  temp = looptemp.next;
  while(temp.next !== looptemp) {  temp= temp.next; }
  temp.next = null; // remove loop

}
var removeLoop = function(loop , h){
  var p1 = h, p2;
  while(true){
    p2 = loop;
    while(p2.next !== loop && p2.next !== p1){
      p2 = p2.next;
    }
    if(p2.next === p1) break;
    p1= p1.next;
  }
  p2.next = null;
}

var h = new ListNode(1);
var r = h.next = new ListNode(2);
var lp = r;
r.next = new ListNode(3); r= r.next;
r.next = new ListNode(4); r= r.next;
r.next = new ListNode(5); r= r.next;
r.next = lp;

detectNRemove(h);
printList(h);