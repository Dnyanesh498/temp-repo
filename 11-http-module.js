//HTTP
//brief intro
const { rmSync } = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our page')
    }
    if(req.url === '/about'){
res.end('Here is our history');
    }
res.end(`<h1> OOPS</h1>
<p> we cant seem to find the page you are looking for</p>
<a href="/">back home</a> `);

})
server.listen(5000);