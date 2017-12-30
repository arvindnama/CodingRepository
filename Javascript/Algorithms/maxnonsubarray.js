var MaxNonSub = function(A){
  var s=[],k=0;
  for(var i =0; i < A.length;i++){
      if(A[i] < 0) continue;
      s[k++] = [];
      s[k-1][0] = A[i];
      for(var j=i+1; j < A.length;j++){
          if(A[j] < 0) break;
          var temp = JSON.parse(JSON.stringify(s[k-1]));
          temp[temp.length] = A[j];
          s[k++] = temp;
      }
  }
  for(var i =0;i<s.length;console.log(JSON.stringify(s[i])),i++);
  
  var getSum = function(r){
      var sum = 0;
      for(var i =0;i<r.length; sum+=r[i],i++);
      return sum;
  }
  //console.log(s.length);
  var res = s.length>0 ? s[0] : null;
  var sum = res?getSum(res):0;
  for(var i = 1; i<k;i++){
      var tempSum = getSum(s[i]);
      if(tempSum > sum) {
          sum = tempSum;
          res = s[i];
      }
  }
  return res;
};  

console.log("Result::"+ JSON.stringify(MaxNonSub([  0, 0, -1, 0])));