/*
* Given a set of n integers, divide the set in two subsets of n/2 sizes each such that 
* the difference of the sum of two subsets is as minimum as possible. 
* If n is even, then sizes of two subsets must be strictly n/2 and if n is odd, 
* then size of one subset must be (n-1)/2 and size of other subset must be (n+1)/2.
*/

let tugOfWar = function(arr){
  let selectedArr;
  let minDiff = Number.MAX_VALUE;
  let sum = 0, n = arr.length;
  arr.forEach(e => {sum +=e;});

  let tugOfWarR = function(curIdx , noOfSelected , curSelected, curSum){
    if(curIdx === n) return;
    if((Math.floor(n/2) - noOfSelected) > (n - curIdx)) return;
    tugOfWarR(curIdx+1 , noOfSelected , curSelected, curSum);
    noOfSelected++;
    curSelected[curIdx] = true;
    curSum += arr[curIdx];
    if(Math.floor(n/2) === noOfSelected){
      let curDiff = Math.abs(Math.floor(sum/2) - curSum);
      if( curDiff < minDiff){
        minDiff = curDiff;
        selectedArr = curSelected.map((i)=>i);
      }  
    } else {
      tugOfWarR(curIdx+1 , noOfSelected,curSelected, curSum);
    }
    curSelected[curIdx] = false;
  };
  tugOfWarR(0,0,arr.map(()=>false),0);
  let set1 = arr.filter((e,idx) => selectedArr[idx]);
  let set2 = arr.filter((e,idx) => !selectedArr[idx]);
  console.log("set1",set1);
  console.log("set2",set2);
};

let  arr= [3, 4, 5, -3, 100, 1, 89, 54, 23, 20];
tugOfWar(arr);
