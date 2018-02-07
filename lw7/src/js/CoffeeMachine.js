'use strict';

class CoffeeMachine {
  constructor() {
    this._currentBalance = 0;
    this._coffeeMenu = new Map ([ 
                                  [1, { name: "Американо", price: 10 }],
                                  [2, { name: "Латте", price: 15 }],
                                  [3, { name: "Каппучино", price: 20 }]
                               ]);
    this._currentCoffeeNumber = null;
  }

  setCash(cash) {
    if (this.checkValidationCash(cash)) {
      this._currentBalance += cash;
      return true;
    }
    return false;
  }

  get currentBalance() {
    return this._currentBalance;
  }

  set currentBalance(value) {
    if (value >= 0) {
      this._currentBalance = value;
    }
  } 

  checkValidationCash(cash) {
    return cash === 1 || cash === 2 || cash === 5 || 
           cash === 10 || cash === 50 || cash === 100;
  }

  getCoffeeMenu() {
    for(let [id, coffee] of this._coffeeMenu) {
      console.log(`${id} - ${coffee.name} (${coffee.price} руб.)`);
    }
  }
  
  chooseCoffee(coffeeNumber) {
    if (this.checkValidationNumberCoffee(coffeeNumber) && 
        this.checkEnoughMoney(coffeeNumber)) {
      this._currentCoffeeNumber = coffeeNumber;
      return true;
    }
    return false;
  }

  checkEnoughMoney(coffeeNumber) {
    return (this._currentBalance >= this._coffeeMenu.get(coffeeNumber).price);
  }

  checkValidationNumberCoffee(number) {
    return this._coffeeMenu.has(number);
  }

  calculateRemain() {
    return this._currentBalance - this._coffeeMenu.get(this._currentCoffeeNumber).price;
  }

  getRemainCash() {
    return this.calculateRemain();
  }
}

module.exports = CoffeeMachine;