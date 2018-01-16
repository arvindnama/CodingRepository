

var findInRotated1 = function(arr , k){
  var s = 0, e = arr.length - 1 , m = Math.floor((e+s)/2);
  var findPivot = (s , e)=>{
    if(s === e) return s;
    if(s > e) return -1;
    let m = Math.floor((e+s)/2);
    if(m < e && arr[m] > arr[m +1]) return m;
    if(m > s && arr[m - 1] > arr[m]) return m -1;
    if(arr[s] > arr[m]){
      return findPivot(s ,  m -1);
    }
    return findPivot(m+1 , e);
  };
  let binarySearch = (s , e) =>{
    if(s > e) return -1;
    let m = Math.floor((e+s)/2);
    if(arr[m] === k) return m;
    if(arr[m] > k) return binarySearch(s , m -1);
    return binarySearch(m + 1 , e);
  };
  let pivot = findPivot(s , e);
  if(pivot === -1) return binarySearch(s,e);  
  if(arr[pivot] === k ) return pivot;
  if(arr[0] < k) return binarySearch(s , pivot - 1);
  return binarySearch(pivot + 1, e);

};

var findInRotated = function(arr, k ){
  let search = (s,e) =>{
    let m = Math.floor((s+e)/2);
    if(s > e) return -1;
    if(arr[s] === k) return s;
    if(arr[e] === k) return e;
    if(arr[m] === k) return m;
    if(arr[s] < arr[m]){
      if(k >= arr[s] && k <= arr[m])
        return search(s , m -1);
      return search(m +1 , e);
    }
    if(k >= arr[m] && k<=arr[e])
      return search(m +1  , e);
    return search(s , m -1);
  };
  return search(0 ,arr.length -1);
};
console.log(findInRotated([5, 1, 2, 3, 4],1));
console.log(findInRotated([4, 5, 6, 7, 0, 1, 2],2));



