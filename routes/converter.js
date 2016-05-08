var express = require('express');
var router = express.Router();
var converter = require('../domain/converter');

router.get('/arabic2roman/:arabic', function (req, res, next) {
  // example: /converter/arabic2roman/2016
  var arabic = parseInt(req.params.arabic);
  var roman = converter.arabic2roman(arabic);
  res.send({ arabic: arabic, roman: roman });
});

module.exports = router;
