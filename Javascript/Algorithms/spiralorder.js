var spiralOrder = function(A){
  var res = [];
  var n = A.length;
  var m = A[0].length;
  var t =0 , l = 0, b = n - 1, r = m -1, d=0, k =0;
  
  while(t<= b && l<=r){
      if(d === 0){
          for(var i = l ; i <= r; i++)res[k++] = A[t][i];
          t++;
      }
      if(d === 1){
          for(var i = t ; i <= b; i++)res[k++] = A[i][r];
          r--;
      }
      if(d === 2){
          for(var i = r ; i >= l; i--) res[k++] = A[b][i];
          b--;
      }
      if(d === 3){
          for(var i = b ; i >= t; i--) res[k++] = A[i][l];
          l++;
      }
      d = (d+1) % 4;
  }
  return res;
};

console.log("Result ::" + JSON.stringify(spiralOrder([[1 , 2 , 3 , 4 ], [5, 6, 7, 8],[9, 10,11 ,12]])));