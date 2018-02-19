function Person(fullName, favColor) {
  this.name = fullName
  this.favoriteColor = favColor;
  this.greet = function () {
    console.log('Hello there, my name is ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
  }
}

console.log('Hello from Person.js');
