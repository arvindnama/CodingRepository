console.log((function(x, f = () => x) {
  var x;
  var y = x;
  x = 2;
  return [x, y, f()];
})(1));

console.log((function() {
  return [
    (() => this.x).bind({ x: 'inner' })(),
    (() => this.x)()
  ]
}).call({ x: 'outer' }));

let x, { x: y = 1 } = { x };
console.log(y);

console.log((function() {
  let f = this ? class g { } : class h { };
  return [
    typeof f,
    typeof h
  ];
})());

console.log((typeof (new (class { class () {} }))));
console.log(typeof (new (class F extends (String, Array) { })).substring);
console.log([...[...'...']].length);
//console.log(typeof (function* f() { yield f })().next().next());

console.log(typeof `${{Object}}`.prototype);
//console.log(((...x, xs)=>x)(1,2,3));

/*
let arr = [ ];
for (let { x = 2, y } of [{ x: 1 }, 2, { y }]) { 
  arr.push(x, y);
}
console.log(arr);
*/