var printArray = function(a){
  console.log(a.join(' ')); 
};

var swap = function(a, i , j){
  [a[i],a[j]] = [a[j],a[i]];
};

var sortwave = function(a){
  var n = a.length;
  var swap = ( i , j)=>{
    [a[i],a[j]] = [a[j],a[i]];
  };
  for(var i = 0 ; i < n -1 ; i+=2){
    if(i > 0 &&  a[i-1] > a[i]){
      swap(i , i-1);
    }
    if(i < n -1 && a[i] < a[i+1]){
      swap(i , i+1);
    }
  }
  return a;
};

console.log(sortwave([10, 90, 49, 2, 1, 5, 23]));