var mergesort = function(a){
  if(a.length === 1) return;
  var n = a.length, l = [] , r = [] , k =0;
  for(var i = 0; i <n/2; l[i] = a[i],i++);
  for(var i = n/2; i <n; r[k++] = a[i],i++);
  mergesort(l);
  mergesort(r);
  var i=0,j=0,k=0;
  while(i<l.length && j<r.length){
    if(l[i]<r[j])a[k++] = l[i++];
    if(l[i]>=r[j])a[k++] = r[j++];
  }
  while(i<l.length) a[k++] = l[i++];
  while(j<r.length) a[k++] = r[j++];
}
var a =[2,3,8,7,6,5,1,4];
mergesort(a);
console.log("Result::"+ JSON.stringify(a));