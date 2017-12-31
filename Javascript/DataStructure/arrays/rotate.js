var printArray = function(a){
  console.log(a.join(' ')); 
};

var reverse = function(a , s ,e){
  while(s<e){
    var temp = a[s];
    a[s] = a[e];
    a[e] = temp;
    s++;
    e--; 
  }
}
var rotateR = function(a ,d ){
  var n = a.length -1;
  reverse(a , 0, d -1);
  reverse(a , d , n);
  reverse(a , 0, n);
  return a;
}
var rotate = function(a , d){
  var temp =[];
  for(var i = 0 ; i < a.length; i++){
    if(i < d){
      temp.push(a[i]);
    } else {
      a[i - d] = a[i];
    }
  }
  var k = 0;
  for(var i = a.length - d; i< a.length;i++ ){
    a[i] = temp[k++];
  }
  return a;
};

var cyclicRotate = function(a){
  var temp = a[a.length - 1];
  for(var i = a.length -2 ;i >=0; i--){
    a[i+1] = a[i];
  }
  a[0] = temp;
  return a;
};

var a = [1,2,3,4,5]
printArray(a);
//printArray(cyclicRotate(cyclicRotate(a)));
printArray(rotateR(a , 2));