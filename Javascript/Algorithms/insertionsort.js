var insertionSort = function(nums){
  for(var i = 1; i < nums.length; i++){
    var val = nums[i];
    var holder = i;
    while(holder>0 && nums[holder - 1]> val){
      nums[holder] = nums[holder -1];
      holder--;
    }
    nums[holder] = val;
  }
  return nums;
}
console.log("Result::"+ JSON.stringify(insertionSort([2,3,8,7,6,5,1,4])));