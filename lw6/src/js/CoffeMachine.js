class CoffeeMachine {
  constructor() {
    this._currentBalance = 0;
    this._coffeeMenu = [ 
                         { id: 1, name: "Американо", price: 10 },
                         { id: 2, name: "Латте", price: 15 },
                         { id: 3, name: "Каппучино", price: 20 }
                       ];
    this._currentCoffeeNumber = null;
  }

  setCash(cash) {
    if (this.checkValidationCash(cash)) {
      this._currentBalance += cash;
      return true;
    }
    return false;
  }

  checkValidationCash(cash) {
    return cash === 1 || cash === 2 || cash === 5 || 
           cash === 10 || cash === 50 || cash === 100;
  }

  getCoffeeMenu() {
    this._coffeeMenu.forEach(function(coffee, i) {
      console.log(coffee.id + ' - ' + coffee.name + ' (' + 
                  coffee.price + ' руб.);');
    }, this);
  }
  
  chooseCoffee(coffeeNumber) {
    if (this.checkValidationNumberCoffee(coffeeNumber) && 
        this.checkEnoughMoney(coffeeNumber - 1)) {
      this._currentCoffeeNumber = coffeeNumber;
      return true;
    }
    return false;
  }

  checkEnoughMoney(coffeeNumber) {
    return (this._currentBalance >= this._coffeeMenu[coffeeNumber].price);
  }

  checkValidationNumberCoffee(number) {
    return ((number >= 1 ) && 
            (number <= this._coffeeMenu.length));
  }

  calculateRemain() {
    return this._currentBalance - this._coffeeMenu[this._currentCoffeeNumber - 1].price;
  }

  getRemainCash() {
    return this.calculateRemain();
  }
}