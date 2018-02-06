class CoffeMachine {
  constructor() {
    this._currentBalance = 0;
    this._coffeMenu = [ 
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
    this._coffeMenu.forEach(function(coffe, i) {
      console.log(coffe.id + ' - ' + coffe.name + ' (' + 
                  coffe.price + ' руб.);');
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
    return number in [1, this._coffeeMenu.length];
  }

}