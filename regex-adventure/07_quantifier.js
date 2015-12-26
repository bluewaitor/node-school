/**
 * Created by bluewaitor on 15/12/26.
 */

// 数量级 +表示一个或者多个, *表示0个或者多个, ?表示0个或者1个
module.exports = function(str){
    return /^\d+\.jpe?g$/.test(str);
};