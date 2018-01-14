
let printMatrix = (matrix) =>{
  matrix.forEach(e => {
    console.log(e);
  });
};

let rotateMatrixExtraSpace = (matrix , clockwise)=>{
  let rows = matrix.length;
  let columns = matrix[0].length;
  let rMatrix = [];
  for(let i = 0; i < columns; rMatrix[i] = [],i++);
  let mapVal = (val)=>{
    if(val ==='^') val = clockwise ? '>' : '<';
    if(val ==='|') val = '-';
    return val;
  };
  let rcIdx = clockwise ? rows - 1 : 0;
  /*let rRows = rMatrix.length;*/
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
      let val = mapVal(matrix[i][j]);
      rMatrix[/*rRows - 1 -*/ j][rcIdx] = val;
    }
    if(clockwise){
      rcIdx--;
    }else{
      rcIdx++;
    }
  }
  return rMatrix;
};


let img = [
  ['*', '*', '*', '^', '*', '*', '*'],
  ['*', '*', '*', '|', '*', '*', '*'],
  ['*', '*', '*', '|', '*', '*', '*'],
  ['*', '*', '*', '|', '*', '*', '*'],
];
printMatrix(img);
console.log();
console.log('clockwise');
printMatrix(rotateMatrixExtraSpace(img,true));
console.log('AntiClockwise');
printMatrix(rotateMatrixExtraSpace(img,false));