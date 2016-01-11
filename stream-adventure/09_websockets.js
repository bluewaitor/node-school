/**
 * Created by bluewaitor on 16/1/11.
 */

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.write('hello\n');