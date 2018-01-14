
let printAntiDiagonal = (matrix) => {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let d = 0;
  let isSafe = (i,j) => i>=0 && j>=0 && i<=rows -1 && j<= columns-1;
  let printAntiDiag = (i,j)=>{
    let diag = '';
    while(isSafe(i,j)){
      diag +=`${matrix[i][j]} `;
      i++; j--;
    }
    console.log(diag);
  };
  while(d < 2){
    if(d === 0){
      for(let c = 0 ; c < columns; c++){
        printAntiDiag(0, c);
      }
      
    } else {
      for(let r = 1; r < rows; r++){
        printAntiDiag(r,columns -1);
      }
    }
    d++;
  }
};

let mat  = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
];
console.log('Print AntiDiagonal'); printAntiDiagonal(mat);