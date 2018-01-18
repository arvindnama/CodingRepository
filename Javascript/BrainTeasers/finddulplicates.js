/*
 * Take two arrays and compare them to find duplicates. 
 * Only  list each duplicate once.
*/


let findDuplicates = (arr1, arr2) =>{
  let dup = {};
  arr1.forEach(e => {
    dup[e] = dup[e] === undefined ? 1 : dup[e] + 1;
  });
  return arr2.filter((e)=>{
    if(dup[e] > 0){
      delete dup[e]; 
      return true;
    }
    return false;
  });
};

console.log(findDuplicates([1,2,3],[2,2,3,4,5,5,6]));