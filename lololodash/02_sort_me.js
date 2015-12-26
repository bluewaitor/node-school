/**
 * Created by bluewaitor on 15/12/26.
 */

var _ = require('lodash');

var worker = function(list){
    return _.sortBy(list, function(value){
        return -value.quantity;
    });
};

module.exports = worker;