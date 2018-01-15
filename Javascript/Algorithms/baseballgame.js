/*
 You're now a baseball game point recorder.

Given a list of strings, each string can be one of the 4 following types:

Integer (one round's score): Directly represents the number of points you get in this round.
"+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
"D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
"C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
Each round's operation is permanent and could have an impact on the round before and the round after.

You need to return the sum of the points you could get in all the rounds.

["5","2","C","D","+"]

["5","2","C","D","+"]
["5","2","C","D","+"]

["n","n","5","D","+"]
["n","n","5","10","+"]
["n","n","5","10","15"]

*/

var calPoints = function(ops){
  let totalScore = 0;
  let stack = [];
  for(let i = 0; i < ops.length; i++){
    if(ops[i] === 'C'){
      totalScore -= +stack.pop();
    } else if(ops[i] === 'D'){
      let curVal = +stack[stack.length - 1] * 2;
      totalScore += curVal;
      stack.push(curVal);
    } else if(ops[i] === '+'){
      let curVal = +(stack[stack.length - 2] + stack[stack.length - 1]);
      stack.push(curVal);
      totalScore += curVal;
    } else {
      stack.push(+ops[i]);
      totalScore += +ops[i];
    }
  }
  return totalScore;
};
var t = ["17304","-13583","+","+","12744","+","C","9386","C","27203","+","C","-1919","18293","12229","11052","22330","18748","19103","+","-19500","-9090","D","27598","1550","28317","D","-15011","C","C","D","-4724","17815","D","+","C","-8950","-843","19326","19037","C","28524","-12537","C","+","D","1207","2318","-88","-19769"];
//console.log(t);
console.log("total Score", calPoints(t));
//console.log(t);