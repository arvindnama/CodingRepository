var finder = function (needle, haystack){
  for(var i = 0 ; i < haystack.length ; i++){
    for( var j = i, k = 0; k < needle.length; k++,j++){
      if(haystack[j] !== needle[k]){
        break;
      }
    }
    if(k === needle.length){
      return i;
    }
  }
  return -1;
};

console.log(finder('ababc','abababc'));
console.log(finder('dog','I like to walk my dog on the beach.'));
console.log(finder('cat','I like to walk my dog on the beach.'));

/*
 * Time complexity of this problem 
 * O(n*m) where n = lenght of needle & m = length of haystack. 
*/