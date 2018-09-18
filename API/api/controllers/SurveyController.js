'user strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  survey = mongoose.model('Survey');
  admin = mongoose.model('Admin');

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


exports.all_survey_data = function(req, res) {
  console.log('1');
  var newUsername = jwt.decode(req.headers.authorization);
  console.log(newUsername);
  var string = JSON.stringify(newUsername);
  var objectValue = JSON.parse(string);
  var getuser = objectValue['username'];
  console.log('1');

  Admin.findOne({
    username: getuser
  }, function(err, user){
    if (err) throw err;
    if (!user) {
      console.log('2');
      res.status(401).json({ message: 'you do not have the admin priviliges', status: '401'});
    } else if (user) {
      mongoose.connection.collection("surveys").find().toArray(function(err, data) {
          res.send(data);
        })
      }
    });
  };
