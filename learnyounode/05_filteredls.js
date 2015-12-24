var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
	list.forEach(function(v){
		if(path.extname(v) == '.'+process.argv[3]){
			console.log(v);
		}
	})
});