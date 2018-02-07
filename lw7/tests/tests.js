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
                  { value: null, expected: false },
                  { value: undefined, expected: false },
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