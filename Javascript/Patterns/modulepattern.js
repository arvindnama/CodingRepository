
var Module = (function(){
  var _privateVar1, _privateVar2 , _privateVar3;
  return {
    methodOne: function(){
      console.log("method1");
    },
    methodTwo: function(){
      console.log("method2");
    }
  };
}());

Module._privateVar1 // not accessible
Module.methodOne()// accessible