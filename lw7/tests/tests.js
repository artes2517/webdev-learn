'use strict';

const CoffeeMachine = require('../src/js/CoffeeMachine.js');
const assert = require('chai').assert;

describe('Метод checkValidationCash', function() {
  function makeTest(value, expected) {
    it(`принимает ${value} и должен вернуть ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      let actual = testCoffeMachine.checkValidationCash(value);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
                  { value: null, expected: false },
                  { value: undefined, expected: false },
                  { value: -5, expected: false },
                  { value: -10, expected: false },
                  { value: -2, expected: false },
                  { value: -1, expected: false },
                  { value: 0, expected: false },
                  { value: 1000, expected: false },
                  { value: 500, expected: false },
                  { value: 15, expected: false },
                  { value: 3500, expected: false },
                  { value: 11, expected: false },
                  { value: 13, expected: false },
                  { value: 51, expected: false },
                  { value: 9, expected: false },
                  { value: 1, expected: true },
                  { value: 2, expected: true },
                  { value: 5, expected: true },
                  { value: 10, expected: true },
                  { value: 50, expected: true },
                  { value: 100, expected: true }
                ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод checkValidationNumberCoffee', function() {
  function makeTest(value, expected) {
    it(`принимает ${value} и должен вернуть ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      let actual = testCoffeMachine.checkValidationNumberCoffee(value);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
                  { value: null, expected: false },
                  { value: undefined, expected: false },
                  { value: -5, expected: false },
                  { value: -10, expected: false },
                  { value: -2, expected: false },
                  { value: -1, expected: false },
                  { value: -5000, expected: false },
                  { value: 0, expected: false },
                  { value: 1000, expected: false },
                  { value: 500, expected: false },
                  { value: 15, expected: false },
                  { value: 3500, expected: false },
                  { value: 11, expected: false },
                  { value: 13, expected: false },
                  { value: 51, expected: false },
                  { value: 9, expected: false },
                  { value: 1, expected: true },
                  { value: 2, expected: true },
                  { value: 3, expected: true }
                ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод checkEnoughMoney', function() {
  function makeTest(value, expected) {
    it(`при балансе ${value.balance} и выбраном номере кофе ${value.coffeeNumber} должен вернуть ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      testCoffeMachine.currentBalance = value.balance;
      let actual = testCoffeMachine.checkEnoughMoney(value.coffeeNumber);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
                  { value: { balance: 0, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 2, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 5, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 4, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 7, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 8, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 9, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 0, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 2, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 5, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 4, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 7, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 8, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 9, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 10, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 14, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 0, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 2, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 5, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 4, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 7, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 8, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 9, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 10, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 19, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 15, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 500, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 100, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 255, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 10, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 100, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 255, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 15, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 3 }, expected: true },
                  { value: { balance: 100, coffeeNumber: 3 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 3 }, expected: true },
                  { value: { balance: 255, coffeeNumber: 3 }, expected: true },
                  { value: { balance: 20, coffeeNumber: 3 }, expected: true }
                ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод chooseCoffee', function() {
  function makeTest(value, expected) {
    it(`при балансе ${value.balance} и выбраном номере кофе ${value.coffeeNumber} должен вернуть ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      testCoffeMachine.currentBalance = value.balance;
      let actual = testCoffeMachine.chooseCoffee(value.coffeeNumber);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
                  { value: { balance: 0, coffeeNumber: null }, expected: false },
                  { value: { balance: 100, coffeeNumber: null }, expected: false },
                  { value: { balance: 100, coffeeNumber: undefined }, expected: false },
                  { value: { balance: 0, coffeeNumber: undefined }, expected: false },
                  { value: { balance: 0, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 2, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 5, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 4, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 7, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 8, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 9, coffeeNumber: 1 }, expected: false },
                  { value: { balance: 0, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 2, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 5, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 4, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 7, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 8, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 9, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 10, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 14, coffeeNumber: 2 }, expected: false },
                  { value: { balance: 0, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 2, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 5, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 4, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 7, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 8, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 9, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 10, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 19, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 15, coffeeNumber: 3 }, expected: false },
                  { value: { balance: 500, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 100, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 255, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 10, coffeeNumber: 1 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 100, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 255, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 15, coffeeNumber: 2 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 3 }, expected: true },
                  { value: { balance: 100, coffeeNumber: 3 }, expected: true },
                  { value: { balance: 500, coffeeNumber: 3 }, expected: true },
                  { value: { balance: 255, coffeeNumber: 3 }, expected: true },
                  { value: { balance: 20, coffeeNumber: 3 }, expected: true }
                ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});
