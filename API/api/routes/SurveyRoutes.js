'use strict';
module.exports = function(app) {
  var SurveyHandlers = require('../controllers/SurveyController.js');
  var AdminHandlers = require('../controllers/AdminController.js');
  var PatientHandlers = require('../controllers/PatientController.js');

  app.route('/submit')
    .post(SurveyHandlers.submit);

  app.route('/create_admin')
      .post(AdminHandlers.create_admin);

  app.route('/admin_login')
      .post(AdminHandlers.admin_login);

  app.route('/register_patient')
      .post(PatientHandlers.register_patient);

  app.route('/patient_login')
      .post(PatientHandlers.patient_login);

  app.route('/all_patient_data')
      .post(PatientHandlers.all_patient_data);

  app.route('/all_survey_data')
      .post(SurveyHandlers.all_survey_data);

};
