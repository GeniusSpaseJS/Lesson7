'use strict';

function Calculator() {
  this.firstValue = 0;
  this.secondValue = 0;

  this.read = function() {
    this.firstValue = parseFloat(prompt('Введіть перше число:', 0));
    this.secondValue = parseFloat(prompt('Введіть друге число:', 0));
  }

  this.sum = function() {
    return this.firstValue + this.secondValue;
  };

  this.mul = function() {
    return this.firstValue * this.secondValue;
  };
}

let calculator = new Calculator();

calculator.read();

console.log('Сума:' + calculator.sum());
console.log('Добуток:' + calculator.mul());