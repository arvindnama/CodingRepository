/*
* The Hamming distance between two integers is the number of positions at 
* which the corresponding bits are different.

* Now your job is to find the total Hamming distance between all pairs of the given numbers.

Example:
Input: 4, 14, 2

Output: 6

Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case). So the answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6
*/


var totalHammingDistance = function(nums) {
  let hammingDistance = (x,y) => (x^y).toString(2).replace(/0/g,'').length;
  let totalDistance = 0;
  for(let i= 0; i < nums.length;i++){
    for(let j= i + 1; j < nums.length;j++){
      totalDistance += hammingDistance(nums[i] , nums[j]);
    }
  }
  return totalDistance;
};
console.log(totalHammingDistance([4,14,2]));

