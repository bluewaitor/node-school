/**
 * Created by bluewaitor on 15/12/26.
 */

var _ = require('lodash');

var worker = function(collection){
    var res = {
        hot: [],
        warm: []
    };

    function check_temperature(temp){
        return temp > 19;
    }
    _.forEach(collection, function(item, key){
        if(_.every(item, check_temperature)){
            res.hot.push(key);
        }else if(_.some(item, check_temperature)){
            res.warm.push(key);
        }
    });
    return res;
};

module.exports = worker;


