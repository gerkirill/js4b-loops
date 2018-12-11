// use: while loop
// don't use: *, / and %
function getReminder(dividend, divider) {
  while (dividend >= divider){
    dividend = dividend - divider;
  }
  return dividend;
}

// use: while loop
// don't use: *, / and %
function integerDivision(dividend, divider) {
  var i = 0;
  while (dividend >= divider) {
    dividend = dividend - divider;
    i++;
  }
  return i;
}

// * bank deposit calculator
function getDepositDuration(initialDeposit, monthlyPercent, desiredDeposit) {
  var monthCounter = 0;

  return monthCounter;
}
