
let printDiagonal = (matrix) => {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let d = 0;
  let isSafe = (i,j) => i>=0 && j>=0 && i<=rows -1 && j<= columns-1;
  let printDiag = (i,j)=>{
    let diag = '';
    while(i >= 0 && j >= 0){
      let i1 = i--, j1= j++;
      if(isSafe(i1,j1)) diag +=`${matrix[i1][j1]} `;
    }
    console.log(diag);
  };
  while(d < 2){
    if(d === 0){
      for(let r = 0; r < rows; r++){
        printDiag(r,0);
      }
    } else {
      for(let c = 1 ; c < columns; c++){
        printDiag(rows-1,c);
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
console.log('Print Diagonal'); printDiagonal(mat);
