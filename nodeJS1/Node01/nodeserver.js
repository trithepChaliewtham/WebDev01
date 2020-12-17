const http = require('http');
http
.createServer(
    (req,response) =>{
        response.writeHead(200, {'Content-Type':'text/html'})
        // console.log("request มีบางผิดปกติ");
        response.write(`<html><head></head><body><h1>สวัสดีชาวโลก What is your name<h1></body></html>`);
        response.end();
    }
)
.listen(80);
console.log('one');
console.log('two');
console.log('three');
console.log('Four');