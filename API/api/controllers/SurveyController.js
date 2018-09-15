'user strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  survey = mongoose.model('Survey');

exports.submit = function(req, res) {
  var newUsername = jwt.decode(req.headers.authorization);
  var string = JSON.stringify(newUsername);
  var objectValue = JSON.parse(string);
  var getpatient = objectValue['username'];

  var newEntry = new Survey(req.body);
  newEntry.score = parseInt(req.body.q1) + parseInt(req.body.q2) + parseInt(req.body.q3) + parseInt(req.body.q4) + parseInt(req.body.q5) + parseInt(req.body.q6) + parseInt(req.body.q7) + parseInt(req.body.q8) + parseInt(req.body.q9) + parseInt(req.body.q10);
  newEntry.PatientID = getpatient
  newEntry.save(function(err, survey) {
    if (err) {
      return res.status(400).send({
        message: err, status:'400'
      });
    } else {
      return res.json({score: newEntry.score, message: 'survey submitted successfully', status:'200'});
      }
  });
};


//exports.display_all_patients =
