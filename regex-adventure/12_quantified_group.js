/**
 * Created by bluewaitor on 15/12/26.
 */

//{n}表示一定要n个,{n,}表示n个以上,{n,m}表示n到m个
module.exports = function(str){
    return /^(0x[A-Fa-f0-9]{2}\s+){8}$/.test(str);
};
