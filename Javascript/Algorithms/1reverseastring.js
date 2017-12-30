
var reversify = function (str) {
  var res = "";
  for (var i = str.length - 1; i >=0 ; i--) {
    res = res + str[i];
  }
  return res;
};



var reverseWord = function(str) {
  var reverseWordR = function(str , start , end){
    var i = start, res="";
    while(i < end && str[i]!==' '){
      res =  res + str[i];
      i++;
    }
    if(str[i] === ' '){
      res = reverseWordR(str , i+1 , end) + ' ' + res;
    }
    return res;
  };
  return reverseWordR(str, 0 , str.length);
};


var s = 'some crazy string';
console.log("Input String::" + s);
console.log("PART 1 Output:: " + reversify(s));
console.log("PART 2 Output:: " + reverseWord(s));