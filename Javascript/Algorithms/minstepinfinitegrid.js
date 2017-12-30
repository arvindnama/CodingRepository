var minSteps = function(A,B){
  var count = A.length;
  var steps = 0;
  for(var i=1;i<count;i++){
    var s1 = A[i - 1], s2 =B[i -1];
    var e1 = A[i] , e2=B[i];
    while(s1 !== e1 || s2 !== e2){
      if(s1 === e1){// <-->
        if(s2 > e2){ // <==
          s2--;
          steps++;
        }else if(s2 < e2){ //-->
          s2++;
          steps++;
        }
      }else if(s2 === e2){// up or down
        if(s1 > e1){ // up
          s1--;
          steps++;
        }else if(s1 < s2){ //<--
          s1++;
          steps++;
        }
      }else if(s1 < e1){// diagonal
        if(s2 < e2){ 
          s2++; s1++;
          steps++;
        }else if(s2 > e2){ 
          s2--; s1++; 
          steps++;
        }
      }else if(s1 > e1){
        if(s2 < e2){ 
          s2++; s1--;
          steps++;
        }else if(s2 > e2){ 
          s2--; s1--; 
          steps++;
        }
      }
    }
    
  }
  return steps;
}

var minStepsOptimal = function(A,B){
  var count = A.length;
  var steps = 0;
  for(var i=1;i<count;i++){
    var s1 = A[i - 1], s2 =B[i -1];
    var e1 = A[i] , e2=B[i];
    var x = Math.abs(s1-e1), y = Math.abs(s2-e2);
    console.log( Math.max(x,y));
    steps += Math.max(x,y);
  }
  return steps;
}

console.log("Result::"+ minStepsOptimal([ 4, 8, -7, -5, -13, 9, -7, 8 ], [ 4, -15, -10, -3, -13, 12, 8, -8 ]));