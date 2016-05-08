// we would like to be able to convert arabic numbers into their roman numeral equivalents
// e.g. 1 == I, 25 == XXV, 1024 = MXXIV

var expect = require('chai').expect;

// sut
var converter = require('../../domain/converter');

// specs
describe('given a number converter', function () {
  describe('when converting from arabic into roman', function () {
    it('it should convert 1 into I', function () {
      var roman = converter.arabic2roman(1);
      expect(roman).to.equal('I');
    });

    it('it should convert 2 into II', function () {
      var roman = converter.arabic2roman(2);
      expect(roman).to.equal('II');
    });

    it('it should convert 3 into III', function () {
      var roman = converter.arabic2roman(3);
      expect(roman).to.equal('III');
    });

    it('it should convert 4 into IV', function () {
      var roman = converter.arabic2roman(4);
      expect(roman).to.equal('IV');
    });

    it('it should convert 25 into XXV', function () {
      var roman = converter.arabic2roman(25);
      expect(roman).to.equal('XXV');
    });

    it('it should convert 1024 into MXXIV', function () {
      var roman = converter.arabic2roman(1024);
      expect(roman).to.equal('MXXIV');
    });
  });
}); 