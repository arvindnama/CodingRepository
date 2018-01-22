/*
* Given a string, you need to reverse the order of characters in 
* each word within a sentence while still 
* preserving whitespace and initial word order.
* 
* Example 1::
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

var reverseWords = function(s) {
  let n = s.length;
  let reverse = (s , i)=>{
    let res = '';
    while(s[i] !==' ' && i < n){
      res = s[i] + res;
      i++;
    }
    if(i < n){
      res += ` ${reverse(s , i + 1)}`;
    }
    return res;
  };
  return reverse(s , 0);
};

console.log(reverseWords("Let's take LeetCode contest"));