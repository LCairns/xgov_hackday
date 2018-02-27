'use strict';

module.exports = {
  name: 'XGOV-Hackday',
  baseUrl: '/',
  steps: {
    '/welcome': {
      template: 'welcome-page',
      next: '/name'
    },
    '/name': {
      fields: ['name'],
      next: '/nino'
    },
    '/nino': {
      fields: ['dob', 'nino'],
      next: '/choices'
    },
    '/choices': {
      fields: ['choices', 'question'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page'), require('./behaviours/submit')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
