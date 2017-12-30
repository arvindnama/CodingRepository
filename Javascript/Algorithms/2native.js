String.prototype.repeatify = function(count){
  var res = "";
  for(var i = 0 ; i < count ; i++){
    res = res + this;
  }
  return res;
};

console.log('hello'.repeatify(3));