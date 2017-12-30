 var debounce = function(cb,context , wait){
  var timeout = null;
  return function(){
    var a = arguments;
    if(timeout){
      clearTimeout(timeout);
    }
    timeout = setTimeout(function(){
      timeout = null;
      cb.apply(context || window , a);
    },wait);
  };
 };