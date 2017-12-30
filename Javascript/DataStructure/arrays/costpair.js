
var closestPair = function(a1,a2, x){
  var map = {};
  for(var i = 0; i < a1.length; i++){
    for(var j = 0; j < a2.length; j++){
      map[i+','+j] = Math.abs(x - (a1[i] + a2[j]));
    }
  }
  var min = 123456;
  var a1Idx , a2Idx;
  for(var i in map){
    if(map[i] < min){
      min = map[i];
      a1Idx = i.split(',')[0];
      a2Idx = i.split(',')[1]
    }
  };
  console.log(a1Idx,a2Idx , min);
}

closestPair([1, 4, 5, 7],[10, 20, 30, 40], 50);