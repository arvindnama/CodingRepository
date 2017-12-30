var plusone = function(A){
  var carryBit =1;
  for(var i = A.length-1;i>=0; i--){
     var sum = A[i] + carryBit;
      A[i] = (sum) % 10;
      carryBit = Math.floor(sum/10);
  }
  if(carryBit > 0) A.unshift(carryBit);
  while(A[0] === 0) A.shift();
  return A;

  var r = [];
  var carryBit =1;
    for(var i = A.length-1;i>=0; i--){
        var sum = A[i] + carryBit;
        r.push(sum%10);
        carryBit = Math.floor(sum/10);
    }
    if(carryBit > 0) r.push(carryBit);
    var i =0;
    var j = r[r.length -1 ]===0 ? r.length -2 : r.length -1;
    while(i<=j){
      var temp = r[i];
      r[i] = r[j];
      r[j] = temp;
      i++;j--;
    }
    return r; 
}
console.log("Result::"+ JSON.stringify(plusone([9,9,9,9])));