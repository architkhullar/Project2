'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
  PatientID: {
    type: String,
    required: 'Kindly enter the PatientID of the user'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  q1: {
    type: String,
    default: '0'
  },
  q2: {
    type: String,
    default: '0'
  },
  q3: {
    type: String,
    default: '0'
  },
  q4: {
    type: String,
    default: '0'
  },
  q5: {
    type: String,
    default: '0'
  },
  q6: {
    type: String,
    default: '0'
  },
  q7: {
    type: String,
    default: '0'
  },
  q8: {
    type: String,
    default: '0'
  },
  q9: {
    type: String,
    default: '0'
  },
  q10: {
    type: String,
    default: '0'
  },
  score: {
    type: String,
  },
  survey_id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  }
});


module.exports = mongoose.model('Survey', SurveySchema);
