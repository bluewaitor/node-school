/**
 * Created by bluewaitor on 2016/1/29.
 */

module.exports = (...args)=>{
    //(prev,curr)=> prev+curr是一个回调函数,看成 一个整体
    //0是reduce函数的第二个参数,初始值的意思
    var sum = args.reduce((prev,curr)=> prev+curr, 0);
    return sum*1.0/args.length;
};