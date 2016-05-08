// we would like to be able to convert arabic numbers into their roman numeral equivalents
// e.g. 1 == I, 25 == XXV, 1024 = MXXIV

var expect = require('chai').expect;

// sut
var converter = require('../../domain/converter');

// specs
describe('given a number converter', function () {
  describe('when converting from arabic into roman', function () {
    var scenarios = [
      { arabic: 1, roman: 'I' },
      { arabic: 2, roman: 'II' },
      { arabic: 3, roman: 'III' },
      { arabic: 4, roman: 'IV' },
      { arabic: 17, roman: 'XVII' },
      { arabic: 25, roman: 'XXV' },
      { arabic: 1024, roman: 'MXXIV' },
      { arabic: 2974, roman: 'MMCMLXXIV' },
    ];

    scenarios.forEach(function (scenario) {
      it('it should convert ' + scenario.arabic + ' into ' + scenario.roman + '', function () {
        var roman = converter.arabic2roman(scenario.arabic);
        expect(roman).to.equal(scenario.roman);
      });
    }, this);
  });
}); 