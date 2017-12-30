var isPalindrome = function(s) {
  for(var i = 0,j=s.length -1; i<j && s[i]===s[j]; i++,j--);
  return i>=j;
};

console.log(isPalindrome("a"));
console.log(isPalindrome("aa"));
console.log(isPalindrome("aaa"));
console.log(isPalindrome("aaabbbcaaa"));
console.log(isPalindrome("aaabbcaaa"));