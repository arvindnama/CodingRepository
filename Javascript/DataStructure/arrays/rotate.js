let printArray = function(a){
  console.log(a.join(' ')); 
};

let reverse = function(a , s ,e){
  while(s<e){
    let temp = a[s];
    a[s] = a[e];
    a[e] = temp;
    s++;
    e--; 
  }
};
let rotateR = function(a ,d ){
  let n = a.length -1;
  reverse(a , 0, d -1);
  reverse(a , d , n);
  reverse(a , 0, n);
  return a;
};
let rotate = function(a , d){
  let temp =[];
  for(let i = 0 ; i < a.length; i++){
    if(i < d){
      temp.push(a[i]);
    } else {
      a[i - d] = a[i];
    }
  }
  let k = 0;
  for(let i = a.length - d; i< a.length;i++ ){
    a[i] = temp[k++];
  }
  return a;
};

let cyclicRotate = function(a){
  let temp = a[a.length - 1];
  for(let i = a.length -2 ;i >=0; i--){
    a[i+1] = a[i];
  }
  a[0] = temp;
  return a;
};

let a = [1,2,3,4,5];
printArray(a);
//printArray(cyclicRotate(cyclicRotate(a)));
printArray(rotateR(a , 2));