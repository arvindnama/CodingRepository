
var nextGreatest = function(a){

  var max = a[a.length - 1];

  for(var i = a.length -2 ; i >=0; i--){
    var temp = a[i];
    a[i] = max;
    max = Math.max(max , temp)
  }
  a[a.length -1] = -1;
  return a;
};

console.log(nextGreatest([16, 17, 4, 3, 5, 2]));