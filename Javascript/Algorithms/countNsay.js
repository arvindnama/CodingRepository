
let countAndSay = function(n){
  let res=['1'];
  if(n > 1){
    let generate = (num) =>{
      let str = '';
      let rs = num[0];
      let c = 1;
      for(let j=1;j<num.length;j++){
        if(num[j] === rs) {
          c++;
        } else{
          str += c+rs;
          rs = num[j];
          c = 1;
        }
      }
      str+=c+rs;
      return str;
    };
    for(let i = 1 ; i < n; i++){
      res[i] = generate(res[i-1]);
    }
  }
  return res[n-1];
};

console.log(countAndSay(4));