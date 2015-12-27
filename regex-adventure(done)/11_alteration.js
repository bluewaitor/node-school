/**
 * Created by bluewaitor on 15/12/26.
 */

// |表示任选一个
module.exports = function(str){
    return /^(cat|dog|robot)\d+$/.test(str);
};
