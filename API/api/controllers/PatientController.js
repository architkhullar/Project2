'user strict';

var mongoose = require('mongoose'),
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
