/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var prefix = strs.length > 0 ? strs[0] : '';
  var getPrefix = function(s1 , s2){
      var p = "";
      var i = 0;
      while(i < Math.min(s1.length,s2.length)){
          if(s1[i] === s2[i]){
              p+=s1[i]
          }else{
              break;
          }
          i++;
      }
      return p;
  }
  for(var i = 1; i< strs.length ; i++){
    console.log(prefix);
    prefix = getPrefix(prefix , strs[i]);
  }    
  return prefix;
};

console.log("Result::" + longestCommonPrefix(['leet','leetCode','leed','led']));