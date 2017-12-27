let sumAll = function(int1, int2) {
  int1 = prompt('Enter bottom number');
  int2 = prompt('Enter top number');
  let x = Number(int1);
  let y =  Number(int2);
  let sum = 0;
  if (isNaN(x) || isNaN(y)) {
    alert("Please enter valid numbers in both fields")
  } else if (x < 0 || y < 0) {
    alert("Both numbers have to be positive")
  } else {
    if (x < y) {
      let botInt = x;
      let topInt = y;
      for (var i = botInt; i <= topInt; i++) {
      sum = sum + i;
      }
    } else {
      let botInt = y;
      let topInt = x;
      for (var i = botInt; i <= topInt; i++) {
      sum = sum + i;
      }
    }
      alert('Sum is ' + sum);
  }
};

// *** Leap Year ***
let leapYear = function(year) {
  year = prompt('Enter year');
  if (Number.isInteger(year / 4) === false) {
    alert(year + " is not a leap year")
  } else if (Number.isInteger(year / 4) === true &&
            Number.isInteger(year / 100) === true &&
            Number.isInteger(year / 400) === false) {
     alert(year + " is not a leap year")
  } else if (Number.isInteger(year / 4) === true &&
            Number.isInteger(year / 100) === true &&
            Number.isInteger(year / 400) === true) {
     alert(year + " is a leap year")
  } else if (Number.isInteger(year / 4) === true &&
            Number.isInteger(year / 100) === false) {
     alert(year + " is a leap year")
  } else {
    alert(year + " is not a leap year")
  }
};

// *** Temperature Converter ***
let ctof = function(tempc) {
  tempc = prompt('Enter Temperature in (C) to be Converted');
  let farH = tempc * 1.8 + 32;
  let farhRound = Math.round(farH * 10) / 10;
  alert(tempc + "C" + " in Fahrenheit is " + farhRound);
}
let ftoc = function(tempf) {
  tempf = prompt('Enter Temperature in (F) to be Converted')
  let celS = (tempf - 32) / 1.8;
  let celsRound = Math.round(celS * 10) / 10;
  alert(tempf + "F" + " in Celsius is " + celsRound);
}
