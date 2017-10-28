var SIZE = 10;
var MAX_RANDOM = 15;

var randomArray = [SIZE];

for (var i = 0; i < SIZE; i++) {
  randomArray[i] = Math.floor(Math.random() * MAX_RANDOM);  
}

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
         || (number == null));
     
document.write("<p>Filled random array:</p>");
document.write("<p>" + randomArray + "</p>");

if (randomArray.indexOf(parseInt(number)) !== -1) {
  document.write("<p>Element in array!</p>"); 
} else {
  document.write("<p>Element not in array.</p>");
}