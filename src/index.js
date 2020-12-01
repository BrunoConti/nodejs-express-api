var http = require('http')
var url = require('url')
var querystring = require('querystring')
var {info, error} = require('./modules/my-log')
var {countries} = require('countries-list')


var server = http.createServer(function(request, response) {
    var parsed = url.parse(request.url)
    console.log('parsed', parsed)

    var pathname = parsed.pathname
    var query = querystring.parse(parsed.query)
    console.log('query', query)

    if (pathname === '/'){
        var result = info('INFO')
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(result)
        response.end
    } else if (pathname === '/exit'){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<html><body><p>EXIT</p></body></html>')
        response.end
    } else if (pathname === '/country'){
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.write(JSON.stringify(countries[query.code]))
        response.end
    } else{
        var result = error('ERROR')
        response.writeHead(404, {'Content-Type': 'text/html'})
        response.write(result)
        response.end
        
    }
})

server.listen(4000)
console.log('Server running on 4000')