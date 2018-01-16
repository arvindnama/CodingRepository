var throttle = function(cb , context , delay){
  var inProg = false;
  return function(){
    var a = arguments;
    if(!inProg){
      inProg = true;
      cb.apply(context || window , a);
      setTimeout(function(){ inProg = false;},delay);
    }
  };
};

var throttleDelayed = function(cb , context , delay){
  var inProg;
  return function(){
    var a = arguments;
    if(!inProg){
      inProg = true;
      setTimeout(function(){
        cb.apply(context , a);
        inProg = false;      
      }, delay);
      
    }
  };
};