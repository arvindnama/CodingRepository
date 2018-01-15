var rotate = function(nums, k) {
  let reverse = (s , e)=>{
    while(s<e){
      [nums[s],nums[e]] = [nums[e],nums[s]];
      s++;
      e--;
    }
  };
  let n = nums.length;
  k = k % n;
  reverse(0, n- 1 - k);
  reverse(n - k, n - 1);
  reverse(0, n -1);
};

let nums = [1,2,3,4,5,6,7];
rotate(nums,3);
console.log(nums);