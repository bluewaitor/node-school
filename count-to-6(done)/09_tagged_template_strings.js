/**
 * Created by bluewaitor on 2016/1/29.
 */

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...sub) {
    var res = pieces[0];
    for(var i = 0, len = sub.length; i < len; i++){
        res += escape(sub[i]) + pieces[i+1];
    }
    return res;
}

function escape(s){
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
}