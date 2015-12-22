var len = process.argv.length;
if (len > 2) {
	var sum = 0;
	for( var i = 2; i < len; i++){
		sum += Number(process.argv[i]);
	}
	console.log(sum);
}else{
	console.log(0);
}