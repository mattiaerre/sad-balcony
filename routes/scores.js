var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:competitionId/:seasonId/:gameWeekId', function (req, res, next) {
  // example: /8/2015/14
  var url = 'http://live.premierleague.com/syndicationdata/competitionId={0}/seasonId={1}/gameWeekId={2}/scores.json';
  url = url.replace('{0}', req.params.competitionId).replace('{1}', req.params.seasonId).replace('{2}', req.params.gameWeekId);
  request.get(url, function (error, response, body) {
    var data = JSON.parse(body);
    data.Data.forEach(function (day) {
      day.Scores.forEach(function (score) {
        score.HomeTeam.label = score.HomeTeam.Name + ' ' + score.HomeTeam.Score;
      }, this);
    }, this);

    res.render('scores', { title: 'Scores', data: data });
  });
});

module.exports = router;
