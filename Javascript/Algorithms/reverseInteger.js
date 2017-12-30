var reverse = function(x) {
  
  var res = 0;
  var isNeg = x < 0;
  x = isNeg ? x * -1 : x;
  while(x){
      res = res*10 +  x % 10;
      x = Math.floor(x/10);
  }
  if(res >= Number.MAX_VALUE) res = 0;
  res =  isNeg ? res * -1: res;
  
  return res;
};

console.log("Result::" + reverse(123));