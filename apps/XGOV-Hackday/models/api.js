'use strict';

const Model = require('hof-model');
const baseUri = 'localhost:8001';

module.exports = class ApiModel extends Model {

    url() {
        return {
            uri: `${baseUri}/`
        };
    }

    parse(data) {
        return {
            'key': data.value
        };
    }
};
