var Subject= function(){
  this.observers = [];
}
Subject.prototype= (function(){

  var _subscribe = function(obj){
    this.observers.push(obj);
  }
  var _unsubscribe = function(obj){
    this.observers.splice(this.observers.indexOf(obj) , 1);
  }
  var _fire= function(){
    this.observers.forEach(element => {
        element.apply(this , arguments);
    });
  }
  return {
    subscribe:_subscribe,
    unsubscribe:_unsubscribe,
    fire:_fire,
  };
}());

var Click = function(){
  Subject.apply(this , arguments);
};
Click.prototype = Object.create(Subject.prototype);

var click = new Click();
click.subscribe((msg)=>{
  alert(msg);
});

click.fire('adada');