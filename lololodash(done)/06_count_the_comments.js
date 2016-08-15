/**
 * Created by bluewaitor on 15/12/26.
 */

var _ = require('lodash');

var worker = function(collection){
    return _.chain(collection)
        .groupBy('username')
        .map(function(item, name){
            return {username: name, comment_count: _.size(item)};
        })
        .sortBy(function(item){
            return -item['comment_count'];
        });
};

module.exports = worker;