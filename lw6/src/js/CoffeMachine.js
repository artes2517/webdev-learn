class CoffeMachine {
  constructor() {
    this._currentBalance = 0;
    this._coffeeMenu = [ { id: 1, name: "Американо", price: 10 },
                        { id: 2, name: "Латте", price: 15 },
                        { id: 3, name: "Каппучино", price: 20 }
                      ];
    this._currentCoffeeNumber;
  }

  setCash(cash) {
    if (this.checkCash(cash)) {
      this.balance += cash;
      return true;
    }
    return false;
  }

  checkCash(cash) {
    return cash === 1 || cash === 2 || cash === 5 || 
           cash === 10 || cash === 50 || cash === 100;
  }
}