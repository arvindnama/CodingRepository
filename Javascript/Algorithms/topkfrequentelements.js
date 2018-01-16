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

console.log(topKFrequent([1,1,1,1,2,2,3],2));