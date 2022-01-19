const http = require('http');
const fs = require('fs')

const server = http.createServer ((req,res) => {
    
    console.log(req.url, req.method);
    
    // setting header content type
    res.setHeader('Content-type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/' :
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me' :
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // sending an html file

    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, () => {
    console.log("Listening on port 3000...");
});