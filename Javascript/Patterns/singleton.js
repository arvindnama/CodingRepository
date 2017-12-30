

var Factory = (function(){

  var singleTonInstance;
  var Person = function(){
    this.name;
    this.age;
    this.address;
  };
  Person.prototype.getName = function(){
    return this.name;
  };

  singleTonInstance = new Person();
  
  return{
    getInstance: function(){
      return singleTonInstance;
    }
  };

}());