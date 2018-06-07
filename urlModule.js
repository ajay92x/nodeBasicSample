var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr, true);

var host = q.host;
var pathname = q.pathname;
var searchQuery = q.search;

console.log(host, pathname, searchQuery);

var qData = q.query;

console.log(qData, qData.year);

