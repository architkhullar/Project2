'user strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  patient = mongoose.model('Patient');

  exports.register_patient = function(req, res) {
  Patient.findOne({
    username: req.body.username
  }, function(err, patient) {
    if (err) throw err;
    if (!patient){
      var newPatient = new Patient(req.body);
      newPatient.save(function(err, patient) {
        if (err) {
          return res.status(400).send({message: err, status:'400'});
        } else {
          return res.json({username: newPatient.username , message: 'Patient Created', status:'200'});
        }
      });
    } else {
      return res.json({message: "this username already exists, select sowmthing else", status:'400'});
    }
  });
};

exports.patient_login = function(req, res) {
  Patient.findOne({
    username: req.body.username,
    password: req.body.password
  }, function(err, patient) {
    if (err) throw err;
    if (!patient) {
      res.status(401).json({ message: 'Authentication failed. User not found.', status: '401' });
    } else if (patient) {
        return res.json({token: jwt.sign({ username: patient.username}, 'secretkey'), message: "user successfully logged in", status:'200'});
    }
  });
};
