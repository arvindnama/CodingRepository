
var largestSum = function(a){
  var cur_Max = a[0];
  var max = a[0];
  for(var i = 0 ; i < a.length;i++){
     cur_Max = cur_Max + a[i];
     max = Math.max(cur_Max , max);
     if(cur_Max <0){
      cur_Max = 0;
     }
  }
  return max;
}
console.log(largestSum([-2, -3, 4, -1, -2, 1, 5, -3]));