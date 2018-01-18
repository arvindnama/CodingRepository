/* [
  ['name', 'occupation', 'age'],   ==> Header 
  ['Roy1', 'Software Engineer', '29'], ==> Row1
  ['Roy2', 'Software Engineer', '26'] ==> Row2
];
*/

let table  = [
  ['name', 'occupation', 'age'],
  ['Roy1', 'Software Engineer', '29'],
  ['Roy2', 'Software Engineer', '26']
];

let filterTable = (table , param , value)=>{
  let paramIdx = table[0].indexOf(param);
  return table.reduce((res , curRow, idx)=>{
    if(curRow[paramIdx] === value){
      res.push(curRow);
    }
    return res;
  });
};

let test1 = filterTable(table, 'age', '29');
console.log(test1);
