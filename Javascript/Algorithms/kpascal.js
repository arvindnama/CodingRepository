var print =function(A){
  var res = [];
  for(var i=0;i<=A;i++){
      var temp = res[0];
      for(var j=1 ; j<=i-1;j++){
        var temp2 = res[j];
        res[j] = res[j]+temp;
        temp = temp2;
      }
      res[0] = res[i] =1;
  }
  return res;
}
console.log("Res:: " + print(3));