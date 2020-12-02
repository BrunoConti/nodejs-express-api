const express = require('express');
const { info, error } = require('./modules/my-log');
const { countries } = require('countries-list');

app = express();

app.get('/', (request, response) => {
  response.status(200).send('HELLO');
});

app.get('/info', (request, response) => {
  info('HOLA INFO NODEMON');
  response.send('HELLO INFO NODEMON');
});

app.get('/country', (request, response) => {
  response.json(countries[request.query.code]);
});

app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});
// var server = http.createServer(function (request, response) {
//   var parsed = url.parse(request.url);
//   console.log("parsed", parsed);

//   var pathname = parsed.pathname;
//   var query = querystring.parse(parsed.query);
//   console.log("query", query);

//   if (pathname === "/") {
//     var result = info("INFO");
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(result);
//     response.end;
//   } else if (pathname === "/exit") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html><body><p>EXIT</p></body></html>");
//     response.end;
//   } else if (pathname === "/country") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify(countries[query.code]));
//     response.end;
//   } else {
//     var result = error("ERROR");
//     response.writeHead(404, { "Content-Type": "text/html" });
//     response.write(result);
//     response.end;
//   }
// });

app.listen(4000, () => {
  console.log('Server running on 4000');
});
