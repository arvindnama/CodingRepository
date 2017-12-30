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

var removeDupUnSorted = function(h){
  var map = {};
  map[h.val] = true;
  var temp = h.next;
  var prev = temp;
  while(temp){
    if(map[temp.val]){
      // remove current 
      prev.next = temp.next;
      temp = prev.next;
    }else{
      map[temp.val] = true;
      prev = temp;
      temp = temp.next;
    }
  }
}

var removeDupUnSorted2 = function(h){
  var temp1 = h;
  while(temp1 !== null){
    var prev = temp1;
    var temp2 = temp1 ? temp1.next:null;
    while(temp2 !==null){
      if(temp1.val === temp2.val){
        prev.next = temp2.next;
        temp2 = prev.next;
      }else{
        prev = temp2;
        temp2 = temp2.next;
      }
    }
    temp1 = temp1.next;
  }
}

var h = new ListNode(12);
var r = h.next = new ListNode(11);
r.next = new ListNode(12); r= r.next;
r.next = new ListNode(21); r= r.next;
r.next = new ListNode(41); r= r.next;
r.next = new ListNode(43); r= r.next;
r.next = new ListNode(21); r= r.next;

printList(h);
removeDupUnSorted2(h);
printList(h);