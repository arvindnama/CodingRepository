var reverseSub = function(a){
  var reverseR = function(a , start , end){
    var i = start, res="";
    while(i < end && a[i]!==' '){
      res = res + a[i];
      i++;
    }
    res +=' ';
    if(a[i] === ' '){
      res = reverseR(a , i+1 , end) + res;
    }
    return res;
  }
  return reverseR(a, 0 , a.length);
}

console.log(reverseSub("My Name is Arvind"));