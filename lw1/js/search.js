var SIZE = 10;
var MAX_RANDOM = 15;

function linearSearch(arr, key) {
  var i = 0;
  arr[SIZE + 1] = key;
  while (arr[i] != key) {
    i++;
  }
  return i;
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

var randomArray = [SIZE + 1];

for (var i = 0; i < SIZE; i++) {
  randomArray[i] = Math.floor(Math.random() * MAX_RANDOM);  
}
        
document.write("<p>Filled random array:</p>");
document.write("<p>" + randomArray + "</p>");

if (linearSearch(randomArray, number) != SIZE + 1) {
  document.write("<p>Element in array!</p>"); 
} else {
  document.write("<p>Element not in array.</p>");
}