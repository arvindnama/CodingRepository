
var swap = function(a, i , j){
  var t = a[i]; a[i] =a[j]; a[j] = t;
};

var rearrange1 = function(a){
  var opt = [];
  for(var i = 0 ; i < a.length; i++){
    if(a[i]< 0 ){
      opt.unshift(a[i]);
    }else{
      opt.push(a[i]);
    }
  }
  return opt;
};

// Merge Sort;
var rearrange2 = function(a ){
  var moveRight = function(a , n){
    for(var i = n ; i >0; i--){
      a[i] = a[i-1];
    }
  }
  for(var i = 0; i < a.length;i++){
    if(a[i] < 0){
      var temp = a[i];
      moveRight(a,i);
      a[0] = temp;
      //a.splice(i,1);
      //a.unshift(temp);
    }
  }
  return a;
 };


 var rearrangeZeronOnes = function(a ){
  var moveRight = function(a , n){
    for(var i = n ; i >0; i--){
      a[i] = a[i-1];
    }
  }
  for(var i = 0; i < a.length;i++){
    if(a[i] === 0){
      var temp = a[i];
      moveRight(a,i);
      a[0] = temp;
      //a.splice(i,1);
      //a.unshift(temp);
    }
  }
  return a;
 };

 var rearrangeOddEven = function(a ){
  var moveRight = function(a , n){
    for(var i = n ; i >0; i--){
      a[i] = a[i-1];
    }
  }
  for(var i = 0; i < a.length;i++){
    if(a[i] % 2 === 0){
      var temp = a[i];
      moveRight(a,i);
      a[0] = temp;
      //a.splice(i,1);
      //a.unshift(temp);
    }
  }
  return a;
 };

 var rearrangeOddEven2 = function(a ){
   var l = 0 , r = a.length -1;
   while( l < r){
     while(a[l]% 2===0 && l < r) l++;
     while(a[r]% 2===1 && l < r) r--;
     if(l<r){
       swap(a,l,r);
       l++; r --;
     }
   }
   return a;
 }

 var rearrangeZeroone2 = function(a ){
  var l = 0 , r = a.length -1;
  while( l < r){
    while(a[l]===0 && l < r) l++;
    while(a[r]===1 && l < r) r--;
    if(l<r){
      swap(a,l,r);
      l++; r --;
    }
  }
  return a;
}

console.log(rearrangeZeroone2([1,0,1,0,1,0,1]));