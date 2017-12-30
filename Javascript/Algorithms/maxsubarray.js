var maxsubarray = function(A){
  var ans = Number.MIN_VALUE;
  for(var i = 0; i < A.length;i++){
    var sum = A[i];
      for(var j = i+1; j<A.length;j++){
        sum+= A[j];
        ans = Math.max(sum,ans);
      }
  }
  return ans;
}

maxsubarrayR = function(A){
  var max = function(A, s,e){

  };
}
console.log("Result::"+ maxsubarray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]));