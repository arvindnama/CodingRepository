
var Person = function(){
  this.name;
  this.age;
  this.address;
};
Person.prototype = (function(){
  var _getName = function(){
    return this.name;
  }
  
  var _getAge = function(){
    return this.age;
  };

  return {
    getName : _getName
  };
}());