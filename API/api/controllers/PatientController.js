'user strict';

var mongoose = require('mongoose'),
  patient = mongoose.model('Patient');

  exports.register_patient = function(req, res) {
  var newPatient = new Patient(req.body);
  newPatient.findOne({
    username: req.body.username
  }, function(err, patient) {
    if (err) throw err;
    if (!patient){
      newPatient.save(function(err, patient) {
        if (err) {
          return res.status(400).send({message: err, status:'400'});
        } else {
          return res.json({username: patient.username , message: 'Patient Created', status:'200'});
        }
      });
    } else {
      return res.json({message: "this username already exists, select sowmthing else", status:'400'});
    }
  });
};
