function isSameType(value1, value2) {
 
  const isVal1NaN = Number.isNaN(value1);
  const isVal2NaN = Number.isNaN(value2);

  if (isVal1NaN && isVal2NaN) {
    return true;
  }

  if (isVal1NaN || isVal2NaN) {
    return false; // only one is NaN
  }

  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
