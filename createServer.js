var http = require('http');
var myModule = require('./module');

var url = require('url');

http.createServer(function (req, res) {		// "req" argument represents the requests from the clients. It aslo contains the url which can be get by "req.url"
    res.writeHead(200);	// 200 is status code

    var q = url.parse(req.url, true).query;	// Split query string into readable parts.
    var txt = q.year + " " + q.month;

    res.write('Date & Time:' + myModule.moduleName() + "," + req.urls + "," + txt);	// calling function created in module.
    res.end();
}).listen(8080);
