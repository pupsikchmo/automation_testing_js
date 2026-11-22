const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expected = [2, 4, 6];
    expect(validator.getEvenNumbersFromArray(input)).to.be.deep.equal(expected);
  });

  it('should throw an error if passed argument is not an array', () => {
    expect(() => {
      validator.getEvenNumbersFromArray('not an array');
    }).to.throw('[not an array] is not an array of "Numbers"');
  });

  it('should throw an error if array contains non-number elements', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([1, '2', 3]);
    }).to.throw('[1,2,3] is not an array of "Numbers"');
  });
});
