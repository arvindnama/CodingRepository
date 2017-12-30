var sort = function(nums){
  var swap = function(a, i,j){
    var temp = a[i]; a[i] = a[j]; a[j] = temp;
  }
  var i = 0 , j = nums.length -1, k =0;
  while(k <= j){
    var a = nums[k];
    if( a === 1){
      k++;
    } else if( a ===2 ){
      swap(nums, k , j);
      j--;
    } else if (a === 0){
      swap(nums , k , i);
      i++;
    }
  }
  return nums;
};
console.log(sort([2,2,2,0,0,0,1,1]));