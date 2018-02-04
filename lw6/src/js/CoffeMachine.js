class CoffeMachine {
  constructor() {
    this._currentBalance = 0;
    this._coffeeMenu = [ { id: 1, name: "Американо", price: 10 },
                        { id: 2, name: "Латте", price: 15 },
                        { id: 3, name: "Каппучино", price: 20 }
                      ];
    this._currentCoffeeNumber;
  }
}