// I II III IV V VI VII VIII IX
// X XX XXX XL L LX LXX LXXX XC
// C CC CCC CD D DC DCC DCCC CM
// M MM MMM

function converter() {
  function arabic2roman(arabic) {
    var collection = arabic.toString().split('').map(function (element, index) {
      return parseInt(element) * Math.pow(10, arabic.toString().length - index - 1);
    });
    var roman = '';
    collection.forEach(function (element) {
      roman = roman + lookup(element);
    }, this);

    return roman;
  }

  function lookup(arabic) {
    if (arabic == 1)
      return 'I';
    if (arabic == 2)
      return 'II';
    if (arabic == 3)
      return 'III';
    if (arabic == 4)
      return 'IV';
    if (arabic == 5)
      return 'V';
    if (arabic == 6)
      return 'VI';
    if (arabic == 7)
      return 'VII';
    if (arabic == 8)
      return 'VIII';
    if (arabic == 9)
      return 'IX';
    if (arabic == 10)
      return 'X';
    if (arabic == 20)
      return 'XX';
    if (arabic == 30)
      return 'XXX';
    if (arabic == 40)
      return 'XL';
    if (arabic == 50)
      return 'L';
    if (arabic == 60)
      return 'LX';
    if (arabic == 70)
      return 'LXX';
    if (arabic == 80)
      return 'LXXX';
    if (arabic == 90)
      return 'XC';
    if (arabic == 100)
      return 'C';
    if (arabic == 200)
      return 'CC';
    if (arabic == 300)
      return 'CCC';
    if (arabic == 400)
      return 'CD';
    if (arabic == 500)
      return 'D';
    if (arabic == 600)
      return 'DC';
    if (arabic == 700)
      return 'DCC';
    if (arabic == 800)
      return 'DCCC';
    if (arabic == 900)
      return 'CM';
    if (arabic == 1000)
      return 'M';
    if (arabic == 2000)
      return 'MM';
    if (arabic == 3000)
      return 'MMM';
    return '';
  }

  return {
    arabic2roman: arabic2roman
  };
}

module.exports = converter();