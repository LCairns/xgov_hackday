'use strict';

const moment = require('moment');
const dateComponent = require('hof-component-date');

module.exports = {
  name: {
    validate: 'required'
  },
  dob: dateComponent('dob', {
    validate: ['required', {type: 'before', arguments: moment().format('YYYY-MM-DD')}]
  }),
  nino: {
    validate: ['required', function isNino(value) {
      const r = /^$|^(?!BG|GB|NK|KN|TN|NT|ZZ)[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}\s?[0-9]{2}\s?[0-9]{2}\s?[0-9]{2}\s?[A-D]{1}$/i;
      return r.test(value);
  }]
  },
  choices: {
    mixin: 'radio-group',
    validate: 'required',
    options: [
      {
        value: '8ball',
        toggle: 'question-group'
      },
      {
        value: 'lyric'
      },
      {
        value: 'quote'
      }
    ]
  },
  question: {
  }
};
