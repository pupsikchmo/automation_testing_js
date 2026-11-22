const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if number is integer', () => {
    expect(validator.isInteger(10)).to.be.equal(true);
  });

  it('should return false if number is a float', () => {
    expect(validator.isInteger(10.5)).to.be.equal(false);
  });

  it('should throw an error if passed value is not a number', () => {
    expect(() => {
      validator.isInteger('10');
    }).to.throw('[10] is not a number');
  });
});
