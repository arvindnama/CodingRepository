var sort = function(arr, cb){
  var i = 0 , c= 0, j = arr.length -1;
  var swap= function(a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  while(i <=j){
    // true -> left , false -> right
    if(cb(arr[i])){
      i++;
    }else{
      swap(j,i);
      j--;
    }
  }
  return arr;
}

var sortEvenNOdd = function(arr){
  return sort(arr,function(val){return val % 2 === 0;});
}
var sortZeroNOnes = function(arr){
  return sort(arr,function(val){return val === 0;});
}


console.log(JSON.stringify(sortZeroNOnes([0,1,0,1,1,1])));
console.log(JSON.stringify(sortEvenNOdd([1,2,3,4,5,6,7,8])));