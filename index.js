/**
 * Primary file for the API
 * Created By Raphael 
 */

// Dependencies
const http  = require('http');
const url = require('url');

 // Configure the server to respond to all requests with a string
const server = http.createServer(function(req, res)  {
  // Parse the url
  let parsedUrl = url.parse(req.url, true);

  // Get the path
  let path = parsedUrl.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  let queryStringObject = parsedUrl.query;

  // Get the HTTP method
  let method = req.method.toLowerCase();

  //Get the headers as an object
  let headers = req.headers;

  res.end('Hello World!\n');

  // Log the request/response
  console.log('Request received on path: '+trimmedPath+' with method: '+method+' and this query string: ',queryStringObject,  headers);

});

// Start the server
server.listen(3000, function() {
  console.log('The server is up and running now');
});