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
// use: while loop
// don't use: *, / and %
function getDepositDuration(initialDeposit, monthlyPercent, desiredDeposit) {
  var monthCounter = 0;
  while (initialDeposit < desiredDeposit) {
    monthCounter++;
    initialDeposit = initialDeposit + (initialDeposit * monthlyPercent / 100);
  }
  return monthCounter;
}