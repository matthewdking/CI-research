const router = (request, response) => {
  if (request.url === '/') {
    response.writeHead(200, {'content-type': "text/html"});
    response.end(`Hello`)
  }
  else if (request.url === '/blog' && request.method === "GET") {
    response.writeHead(200, {'content-type': "text/html"});
    const someObj = JSON.stringify(["string1", "string2", "string3"]);
    response.end(someObj)
  }
  else if (request.url === '/blog' && request.method === "POST" && request.headers.password && request.headers.password === "potato") {
    let data = '';
    request.on('data', (chunk) => {
      data += chunk;
    })
    request.on('end', () => {
      if (data === '') {
        response.writeHead(302, {'location': "/blog"});
        response.end()
      }
      else {
        response.writeHead(200, {'content-type': "application/JSON"});
        response.end(data)
      }
    })
  }
  else if (request.url === '/blog' && request.method === "POST" && request.headers.password === undefined) {
      response.writeHead(403, {'content-type': "text/html"});
      response.end('Forbidden')
    }
  else {
    response.writeHead(404, {'content-type': "text/html"});
    response.end(`UnknownURI`)
  }
}

module.exports = router;
