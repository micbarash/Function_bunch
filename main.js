// *** Leap Year ***
let leapYear = function(year) {
  
}

// *** Temperature Converter ***
let ctof = function(tempc) {
  tempc = prompt('Enter Temperature in (C) to be Converted')
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
