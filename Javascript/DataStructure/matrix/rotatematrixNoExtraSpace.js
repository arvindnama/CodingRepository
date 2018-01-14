let printMatrix = (matrix) =>{
  matrix.forEach(e => {
    console.log(e);
  });
  console.log('');
};

let rotateMatrix = (matrix , clockwise)=>{
  let clockWizeSwap = (t,b,l,r,i)=>{
    let j = i - l;
    [matrix[t][i] , matrix[t+j][r]] = [matrix[t+j][r],matrix[t][i]]; // top<->right
    [matrix[t][i] , matrix[b][r-j]] = [matrix[b][r-j],matrix[t][i]]; // top<->bottom
    [matrix[t][i] , matrix[b-j][l]] = [matrix[b-j][l],matrix[t][i]]; // top<->left
  };
  let antiClockWizeSwap = (t,b,l,r,i)=>{
    let j = i - l;
    [matrix[t][i] , matrix[b-j][l]] = [matrix[b-j][l],matrix[t][i]]; // top<->left
    [matrix[t][i] , matrix[b][r-j]] = [matrix[b][r-j],matrix[t][i]]; // top<->bottom
    [matrix[t][i] , matrix[t+j][r]] = [matrix[t+j][r],matrix[t][i]]; // top<->right
  };
  let rotateRec = (t,b,l,r)=>{
    if(t > b || l > r) return;
    //console.log('pass');
    for(let i = l; i < r; i++){
      if(clockwise){
         clockWizeSwap(t,b,l,r,i);
      } else {
        antiClockWizeSwap(t,b,l,r,i);
      }
    }
    t++; b--; l++; r--;
    rotateRec(t,b,l,r);
  };
  rotateRec(0,matrix.length -1 , 0, matrix[0].length -1);
};

let mat  = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
];
let mat2 = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
];

printMatrix(mat);
console.log('clockWise\n');
rotateMatrix(mat,true);
printMatrix(mat);

console.log('AnticlockWise\n');
rotateMatrix(mat2);
printMatrix(mat2);