// *** Reverse String ***
let reverseString = function(myStr) {
  myStr = document.getElementById('frm8');
  let myArray = (myStr.value).split('')
  let revArray = myArray.reverse();
  let newStr = revArray.join('');
  alert('The reversed string is ' + newStr);
};
// *** Remove From Array ***
let removeFromArray = function(a, b) {
  a = document.getElementById('frm6');
  b = document.getElementById('frm7');
  let arr1 = (a.value).split("");
  let arr2 = (b.value).split("");
  let holderArray = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      //alert('no match found');
    } else {
    holderArray.push(arr1.splice(i,1));
      i = i-1;
    };
  }
  alert('What is left is ' + arr1);
};
// *** Sum All ***
let sumAll = function(int1, int2) {
  int1 = document.getElementById("frm4");
  int2 = document.getElementById("frm5");
  let x = Number(int1.value);
  let y = Number(int2.value);
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
  year = document.getElementById("frm3");
  if (Number.isInteger(year.value / 4) === false) {
    alert(year.value + " is not a leap year")
  } else if (Number.isInteger(year.value / 4) === true &&
            Number.isInteger(year.value / 100) === true &&
            Number.isInteger(year.value/ 400) === false) {
     alert(year.value + " is not a leap year")
  } else if (Number.isInteger(year.value / 4) === true &&
            Number.isInteger(year.value / 100) === true &&
            Number.isInteger(year.value/ 400) === true) {
     alert(year.value + " is a leap year")
  } else if (Number.isInteger(year.value / 4) === true &&
            Number.isInteger(year.value / 100) === false) {
     alert(year.value + " is a leap year")
  } else {
    alert(year.value + " is not a leap year")
  }
};
// *** Temperature Converter ***
let ctof = function(tempc) {
  tempc = document.getElementById('frm1');
  let farH = tempc.value * 1.8 + 32;
  let farhRound = Math.round(farH * 10) / 10;
  alert(tempc.value + "C" + " in Fahrenheit is " + farhRound);
};
let ftoc = function(tempf) {
  tempf = document.getElementById('frm2');
  let celS = (tempf.value - 32) / 1.8;
  let celsRound = Math.round(celS * 10) / 10;
  alert(tempf.value + "F" + " in Celsius is " + celsRound);
};
