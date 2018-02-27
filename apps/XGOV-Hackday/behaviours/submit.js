'use strict';

const api = require('../models/api');

module.exports = (superclass) => class extends superclass {
  saveValues(req, res, callback) {
    // eslint-disable-next-line
    console.log('Posting Data');
    req.sessionModel.reset();
    super.saveValues(req, res, callback);
  }
};
