/**
 * Created by bluewaitor on 15/12/26.
 */

var _ = require('lodash');

var worker = function(list){
    return _.chain(list)
        .map(function (item) {
            return (item+'chained').toUpperCase();
        })
        .sortBy()
        .value();
};

module.exports = worker;