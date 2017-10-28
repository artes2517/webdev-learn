var SIZE = 10;
var MAX_RANDOM = 15;
var randomArray = [SIZE + 1];

do {
  var number = prompt('Enter element:', '');
  var check = false;
  if (number % 1 != 0) {
    check = true;  
  }
  if (check) {
    alert("Input error!"); 
  }
} while (check || isNaN(number) || (number == '') 
         || (number == null))