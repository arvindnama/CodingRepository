var moveZeroes = function(nums) {
  var i = 0, j = nums.length - 1;
  while(i<j){
      console.log(nums[i] )
      if(nums[i] === 0){
          for(var k = i; k < j; k++){
              nums[k] = nums[k+1];
          }
          nums[j] = 0;
          j--;
      }else{
          i++;
      }
  }

};

moveZeroes([0,1,0,3,12])