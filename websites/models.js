'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const companySchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true, lowercase: true, trim: true },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true }
  },
  description: { type: String, required: true },
  notes: String
});

const Company = mongoose.model('company', companySchema);


const personSchema = mongoose.Schema({
  company_id: { type: String, required: true },
  status: { type: Number, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  },
  title: String,
  url: { type: String, lowercase: true, trim: true },
  contacts: {
    date: [Date],
    method: [String]
  },
  notes: String
});

const Person = mongoose.model('person', personSchema);


module.exports = { Company, Person };