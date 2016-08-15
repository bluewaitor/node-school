
var _ = require('lodash');

var worker = function (collection) {

    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(collection);

};

module.exports = worker;