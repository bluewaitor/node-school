var mym = require('./06_mymodule.js');

mym(process.argv[2],process.argv[3],function(err,list){
	if(err){
		console.log('There was an error:', err);
	}
	list.forEach(function(file){
		console.log(file);
	});
});