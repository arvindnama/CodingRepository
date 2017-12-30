
var alternateSorting1 = function(a){
  a.sort((i,j)=> i > j);
  var opt = [];
  var i = 0 , j = a.length-1;
  while(i<=j){
    if(i<=j) opt.push(a[j--]);
    if(i<=j) opt.push(a[i++]);
  }
  return opt;
}

console.log(alternateSorting1([7, 1, 2, 3, 4, 5, 6]));