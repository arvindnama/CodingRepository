const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(((i)=>{
    return ()=>console.log('Index: ' + i + ', element: ' + arr[i]);
  })(i), i * 1000);
}