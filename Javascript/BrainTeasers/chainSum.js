/*
* Implement Sum(3)(4)(5)=12 with javascript 
*/

let Sum =(val)=>{
  Sum.res = Sum.res === undefined ? 0 : Sum.res;
  Sum.res += val;
  Sum.valueOf = ()=>Sum.res;
 //Sum.toString = ()=>Sum.res;
  return Sum;
};


console.log(+Sum(3)(4)(5));