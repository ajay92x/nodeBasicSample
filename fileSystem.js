var http = require('http');
var fs = require('fs');

// read file
http.createServer(function(req, res) {

	fs.readFile('fileName.txt', function(err, data) {

		res.writeHead(200);
		res.write(data);
		res.end();
	});

}).listen(8080);

// append specific content at the end of file. If file is not created then file will be created. 
fs.appendFile('fileName.txt', 'Add some text in file.\n', function(err){

	if(err) throw err;
	console.log('SAVED');

});

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created.
fs.open('fileName.txt', 'w', function(err, file){

	if(err) throw err;
	console.log('FILE OPENED');

});

// The fs.writeFile() method REPLACES the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created.
fs.writeFile('fileName.txt', 'Add some text in file.\n', function(err){

	if(err) throw err;
	console.log('SAVED');

});

// The fs.unlink() method DELETE the specified file.
fs.unlink('fileName.txt', function(err){

	if(err) throw err;
	console.log('FILE DELETED');

});

// The fs.rename() method RENAME the specified file.
fs.rename('oldFileName.txt', 'newFileName.txt', function(err){

	if(err) throw err;
	console.log('FILE RENAMED');

})


