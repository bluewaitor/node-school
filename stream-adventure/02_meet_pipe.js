/**
 * Created by bluewaitor on 15/12/26.
 */

var fs = require('fs');

fs.createReadStream(process.argv[2]).pipe(process.stdout);