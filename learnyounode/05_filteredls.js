var fs = require('fs');

fs.readdir(process.argv[2], function  (err, data) {
	console.log(data);
});