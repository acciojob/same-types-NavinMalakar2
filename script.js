function isSameType(value1, value2) {
  //your js code here
	const val1 = Number(value1);
  const val2 = Number(value2);

  // Check if both are NaN
  if (Number.isNaN(val1) && Number.isNaN(val2)) {
    return true;
  }

  // If both original values are NaN (typed by user like "NaN")
  if (value1 === "NaN" && value2 === "NaN") {
    return true;
  }

  // Compare actual types
  return typeof val1 === typeof val2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
