var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
fs.readdir(filePath, function(err, list) {
	if(err){
		throw err;
	}
	list.forEach(function(item){
		if('.'+process.argv[3] == path.extname(item)){
			console.log(item);
		}

	});
});
