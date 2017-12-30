
var Person = function(){
  this.name;
  this.age;
  this.address;
};
Person.prototype.getName = function(){
  return this.name;
}

Person.prototype.getAge = function(){
  return this.age;
}