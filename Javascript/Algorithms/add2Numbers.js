 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var carryOver = 0;
  var dummy = new ListNode(0);
  var l3 = dummy;
   
  while(l1 !== null || l2  !== null){
      var num1 = 0;
      var num2 = 0;
      if(l1 !== null) num1 = l1.val;
      if(l2 !== null) num2 = l2.val;
      var sum = num1 + num2 + carryOver;
      carryOver = Math.floor(sum/10.0);        
      l3.next = new ListNode(sum % 10);
      l3 = l3.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }
  if(carryOver){
      l3.next = new ListNode(carryOver);
  }
  return dummy.next;
};

var listToString = function(l){
    var str = "";
    while(l){
        str += l.val + (l.next ? "->" : "");
        l = l.next;
    }
    return str;
}
var l1 = new ListNode(9); 
l1.next = new ListNode(9);
var l2 = new ListNode(9);
l2.next = new ListNode(9);
console.log(listToString(addTwoNumbers(l1 , l2)));