var reverseSub = function(a){
  var reverseR = function(a , start , end){
    var i = start, res="";
    while(i < end && a[i]!==' '){
      res = a[i] + res;
      i++;
    }
    if(a[i] === ' '){
      res +=' ';
      res += reverseR(a , i+1 , end);
    }
    return res;
  }
  return reverseR(a, 0 , a.length);
}

console.log(reverseSub("My Name is Arvind"));