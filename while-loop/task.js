// use: while loop
// don't use: *, / and %
function getReminder(dividend, divider) {
  while (dividend >= divider) {
    dividend = dividend - divider;
  }
  return dividend;
}

// use: while loop
// don't use: *, / and %
function integerDivision(dividend, divider) {
  var count = 0;
  while (dividend >= divider) {
    count++;
    dividend = dividend - divider;
  }
  return count;
}

// * bank deposit calculator
function getDepositDuration(initialDeposit, monthlyPercent, desiredDeposit) {
  var currentDeposit = initialDeposit;
  var monthCounter = 0;
  while (currentDeposit < desiredDeposit) {
    monthCounter++;
    currentDeposit = currentDeposit + (currentDeposit * monthlyPercent / 100);
  }
  return monthCounter;
}