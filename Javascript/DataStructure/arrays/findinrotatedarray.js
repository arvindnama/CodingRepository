

var findInRotated = function(arr , k){
  var s = 0, e = arr.length - 1 , m = Math.floor((e-s)/2);
  while(s <= e){
    if(arr[s + m] === k){
      return s + m;
    } else if ( arr[m] < arr[s]){
      e = m;
    } else {
      s = s + m + 1;
    }
    m = Math.floor((e-s)/2);
  }
  return -1;
};
//console.log(findInRotated([5,1,2,3,4],1));
console.log(findInRotated([4, 5, 6, 7, 0, 1, 2],1));