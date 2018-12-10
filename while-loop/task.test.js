describe('While loop', function() {

  function desc(func, test) {
    return func + '(' + test[0].join(', ') + ') должен возвращать "' + test[1] + '"';
  }

  describe('getRemainder', () => {
    var tests = [
      [ [5, 3], 2 ],
      [ [5, 2], 1 ],
      [ [9, 9], 0 ],
    ];
    tests.forEach(test => it(desc('getRemainder', test), () => {
      assert.equal(getRemainder.apply(null, test[0]), test[1]);
    }))
  });

  describe('integerDivision', () => {
    var tests = [
      [ [5, 3], 1 ],
      [ [5, 2], 2 ],
      [ [9, 9], 1 ],
    ];
    tests.forEach(test => it(desc('integerDivision', test), () => {
      assert.equal(integerDivision.apply(null, test[0]), test[1]);
    }))
  });

  describe('getDepositDuration', () => {
    var tests = [
      [ [100, 10, 100], 0 ],
      [ [100, 10, 110], 1 ],
      [ [100, 10, 109], 1 ],
      [ [1000, 100, 5000], 3 ],
    ];
    tests.forEach(test => it(desc('getDepositDuration', test), () => {
      assert.equal(getDepositDuration.apply(null, test[0]), test[1]);
    }))
  });

});

