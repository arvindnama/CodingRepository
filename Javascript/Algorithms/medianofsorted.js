/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  
  var t,s;
  if(nums1[0] < nums2[0]){
    t = nums1; s = nums2;  
  }  else{
    t = nums2; s = nums1;
  }    
  var j = 0;
  var sIdx = 0;
  while(sIdx < s.length  && j < t.length){
    var char = s[sIdx];
    for(var k = j; k < t.length; k++){
      console.log("k="+k +" char::"+char);
      if(t[k]>=char){
        console.log("insert " + char);
        t.splice(k,0,char);
        j = k +1;
        sIdx++;
        break;
      }
    }
    if(k === t.length) break;
    console.log("j="+j);
  }
  if(sIdx < s.length){
    console.log(JSON.stringify(s));
    for(var i = sIdx; i< s.length;i++){
        console.log("push " + s[i]);
        t.push(s[i]);
    }
  }
  console.log(JSON.stringify(t));
  var n2 = Math.floor(t.length/2);
  return t.length % 2 === 0 ? ((t[n2 -1] + t[n2])/2) :(t[n2]);
  
};

console.log("Result" + findMedianSortedArrays([1,2],[3,4]));