var topKFrequent = function(nums, k) {
    let map = {};
    nums.forEach(e => {
      if(!map[e]){
        map[e] = 1;
      } else{
        map[e]++;
      }
    });
    let keys = Object.keys(map);
    keys.sort((a,b)=> {
      return map[+a] < map[+b];
    });
    return keys.filter((e,idx)=> idx<k).map((e)=>+e);
};

console.log(topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0],6));