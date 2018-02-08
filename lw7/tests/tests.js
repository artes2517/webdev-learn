'use strict';

const CoffeeMachine = require('../src/js/CoffeeMachine.js');
const assert = require('chai').assert;
const should = require('chai').should;

//
//TODO: Задать вопрос "Как тестировать конструктор?";
//

/* describe('Конструктор', function() {
  it(`Должен создать новый объект`, function() {
    (function() {
      let testCoffeMachine = new CoffeeMachine();
    }).should.not.throw(/NOT A NUMBER/);
  });
}); */

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

describe('Метод setCash', function() {
  function makeTest(value, expected) {
    it(`добавляет ${value.cash} к текущему балансу ${value.balance} и итоговый баланс должен стать: ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      testCoffeMachine.currentBalance = value.balance;
      testCoffeMachine.setCash(value.cash);
      let actual = testCoffeMachine.currentBalance;
      assert.equal(expected, actual);
    });
  }
  let arranges = [
                  { value: { balance: 0, cash: null }, expected: 0 },
                  { value: { balance: 5, cash: null }, expected: 5 },
                  { value: { balance: 10, cash: null }, expected: 10 },
                  { value: { balance: 100, cash: null }, expected: 100 },
                  { value: { balance: 0, cash: undefined }, expected: 0 },
                  { value: { balance: 5, cash: undefined }, expected: 5 },
                  { value: { balance: 10, cash: undefined }, expected: 10 },
                  { value: { balance: 100, cash: undefined }, expected: 100 },
                  { value: { balance: 0, cash: -1 }, expected: 0 },
                  { value: { balance: 5, cash: -1 }, expected: 5 },
                  { value: { balance: 10, cash: -1 }, expected: 10 },
                  { value: { balance: 100, cash: -1 }, expected: 100 },
                  { value: { balance: 0, cash: -20 }, expected: 0 },
                  { value: { balance: 5, cash: -20 }, expected: 5 },
                  { value: { balance: 10, cash: -20 }, expected: 10 },
                  { value: { balance: 100, cash: -20 }, expected: 100 },
                  { value: { balance: 0, cash: 3 }, expected: 0 },
                  { value: { balance: 5, cash: 3 }, expected: 5 },
                  { value: { balance: 10, cash: 3 }, expected: 10 },
                  { value: { balance: 100, cash: 3 }, expected: 100 },
                  { value: { balance: 0, cash: 5000 }, expected: 0 },
                  { value: { balance: 5, cash: 5000 }, expected: 5 },
                  { value: { balance: 10, cash: 5000 }, expected: 10 },
                  { value: { balance: 100, cash: 5000 }, expected: 100 },
                  { value: { balance: 0, cash: 6 }, expected: 0 },
                  { value: { balance: 5, cash: 6 }, expected: 5 },
                  { value: { balance: 10, cash: 6 }, expected: 10 },
                  { value: { balance: 100, cash: 6 }, expected: 100 },
                  { value: { balance: 0, cash: 51 }, expected: 0 },
                  { value: { balance: 5, cash: 51 }, expected: 5 },
                  { value: { balance: 10, cash: 51 }, expected: 10 },
                  { value: { balance: 100, cash: 51 }, expected: 100 },
                  { value: { balance: 0, cash: 99 }, expected: 0 },
                  { value: { balance: 5, cash: 99 }, expected: 5 },
                  { value: { balance: 10, cash: 99 }, expected: 10 },
                  { value: { balance: 100, cash: 99 }, expected: 100 },
                  { value: { balance: 0, cash: 1 }, expected: 1 },
                  { value: { balance: 5, cash: 1 }, expected: 6 },
                  { value: { balance: 9, cash: 1 }, expected: 10 },
                  { value: { balance: 10, cash: 1 }, expected: 11 },
                  { value: { balance: 50, cash: 1 }, expected: 51 },
                  { value: { balance: 100, cash: 1 }, expected: 101 },
                  { value: { balance: 0, cash: 2 }, expected: 2 },
                  { value: { balance: 5, cash: 2 }, expected: 7 },
                  { value: { balance: 9, cash: 2 }, expected: 11 },
                  { value: { balance: 10, cash: 2 }, expected: 12 },
                  { value: { balance: 50, cash: 2 }, expected: 52 },
                  { value: { balance: 100, cash: 2 }, expected: 102 },
                  { value: { balance: 0, cash: 5 }, expected: 5 },
                  { value: { balance: 5, cash: 5 }, expected: 10 },
                  { value: { balance: 9, cash: 5 }, expected: 14 },
                  { value: { balance: 10, cash: 5 }, expected: 15 },
                  { value: { balance: 50, cash: 5 }, expected: 55 },
                  { value: { balance: 100, cash: 5 }, expected: 105 },
                  { value: { balance: 0, cash: 10 }, expected: 10 },
                  { value: { balance: 5, cash: 10 }, expected: 15 },
                  { value: { balance: 9, cash: 10 }, expected: 19 },
                  { value: { balance: 10, cash: 10 }, expected: 20 },
                  { value: { balance: 50, cash: 10 }, expected: 60 },
                  { value: { balance: 100, cash: 10 }, expected: 110 },
                  { value: { balance: 0, cash: 50 }, expected: 50 },
                  { value: { balance: 5, cash: 50 }, expected: 55 },
                  { value: { balance: 9, cash: 50 }, expected: 59 },
                  { value: { balance: 10, cash: 50 }, expected: 60 },
                  { value: { balance: 50, cash: 50 }, expected: 100 },
                  { value: { balance: 100, cash: 50 }, expected: 150 },
                  { value: { balance: 0, cash: 100 }, expected: 100 },
                  { value: { balance: 5, cash: 100 }, expected: 105 },
                  { value: { balance: 9, cash: 100 }, expected: 109 },
                  { value: { balance: 10, cash: 100 }, expected: 110 },
                  { value: { balance: 50, cash: 100 }, expected: 150 },
                  { value: { balance: 100, cash: 100 }, expected: 200 }
                 ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод calculateRemain', function() {
  function makeTest(value, expected) {
    it(`при балансе ${value.balance} и выбраном номере кофе ${value.coffee} сдача должена быть: ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      testCoffeMachine.currentBalance = value.balance;
      testCoffeMachine.currentCoffeeNumber = value.coffee;
      let actual = testCoffeMachine.calculateRemain();
      assert.equal(expected, actual);
    });
  }
  let arranges = [
                  { value: { balance: 10, coffee: 1 }, expected: 0 },
                  { value: { balance: 50, coffee: 1 }, expected: 40 },
                  { value: { balance: 22, coffee: 1 }, expected: 12 },
                  { value: { balance: 500, coffee: 1 }, expected: 490 },
                  { value: { balance: 15, coffee: 2 }, expected: 0 },
                  { value: { balance: 25, coffee: 2 }, expected: 10 },
                  { value: { balance: 36, coffee: 2 }, expected: 21 },
                  { value: { balance: 50, coffee: 2 }, expected: 35 },
                  { value: { balance: 22, coffee: 2 }, expected: 7 },
                  { value: { balance: 500, coffee: 2 }, expected: 485 },
                  { value: { balance: 20, coffee: 3 }, expected: 0 },
                  { value: { balance: 25, coffee: 3 }, expected: 5 },
                  { value: { balance: 36, coffee: 3 }, expected: 16 },
                  { value: { balance: 50, coffee: 3 }, expected: 30 },
                  { value: { balance: 32, coffee: 3 }, expected: 12 },
                  { value: { balance: 500, coffee: 3 }, expected: 480 },
                 ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод getRemainCash', function() {
  function makeTest(value, expected) {
    it(`при балансе ${value.balance} и выбраном номере кофе ${value.coffee} сдача должена быть: ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      testCoffeMachine.currentBalance = value.balance;
      testCoffeMachine.currentCoffeeNumber = value.coffee;
      let actual = testCoffeMachine.getRemainCash();
      assert.equal(expected, actual);
    });
  }
  let arranges = [
                  { value: { balance: 10, coffee: 1 }, expected: 0 },
                  { value: { balance: 50, coffee: 1 }, expected: 40 },
                  { value: { balance: 22, coffee: 1 }, expected: 12 },
                  { value: { balance: 500, coffee: 1 }, expected: 490 },
                  { value: { balance: 15, coffee: 2 }, expected: 0 },
                  { value: { balance: 25, coffee: 2 }, expected: 10 },
                  { value: { balance: 36, coffee: 2 }, expected: 21 },
                  { value: { balance: 50, coffee: 2 }, expected: 35 },
                  { value: { balance: 22, coffee: 2 }, expected: 7 },
                  { value: { balance: 500, coffee: 2 }, expected: 485 },
                  { value: { balance: 20, coffee: 3 }, expected: 0 },
                  { value: { balance: 25, coffee: 3 }, expected: 5 },
                  { value: { balance: 36, coffee: 3 }, expected: 16 },
                  { value: { balance: 50, coffee: 3 }, expected: 30 },
                  { value: { balance: 32, coffee: 3 }, expected: 12 },
                  { value: { balance: 500, coffee: 3 }, expected: 480 },
                 ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});