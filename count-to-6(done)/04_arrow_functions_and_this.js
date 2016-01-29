/**
 * Created by bluewaitor on 2016/1/29.
 */
var foot = {
    kick: function(){
        this.yelp = "Ouch!";
        setImmediate(()=>console.log(this.yelp));
    }
};
foot.kick();