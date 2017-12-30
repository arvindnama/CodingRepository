var printArray = function(a){
  console.log(a.join(' ')); 
};

var swap = function(a, i , j){
  var t = a[i]; a[i] =a[j]; a[j] = t;
};

var sortwave = function(a){
  var n = a.length;
  for(var i = 0 ; i < n -1 ; i+=2){
    if(i > 0 &&  a[i-1] > a[i]){
      swap(a,i , i-1);
    }
    if(i < n -1 && a[i] < a[i+1]){
      swap(a,i , i+1);
    }
  }
  return a;
};

console.log(sortwave([10, 90, 49, 2, 1, 5, 23]));