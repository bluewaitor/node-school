/**
 * Created by bluewaitor on 15/12/26.
 */


var _ = require('lodash');

var worker = function(list){
    return _.where(list, {active: true});
};

module.exports = worker;