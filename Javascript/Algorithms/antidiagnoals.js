var anit =function(A){
  var n = A.length;
  var d = []
  var getDiagonals = function(i,j){
      var cd = [];
      while( i >=0 && j >=0 && i <n && j <n){
          cd.push(A[i++][j--]);
      }
      console.log(JSON.stringify(cd));
      d.push(cd);
  }
  for(var k = 0 ; k < n;k++){
      console.log("0 " + k);
      getDiagonals(0,k);
  }
  for(var k = 1 ; k < n;k++){
      console.log( k + " " + n);
      getDiagonals(k,n-1);
  }
  return d;
}

console.log("Result::"+ JSON.stringify(anit([[1, 2, 3],  [4, 5, 6],  [7, 8, 9]])));