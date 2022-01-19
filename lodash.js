const http = require('http');
const _ = require('lodash'); // using third party packages

const server = http.createServer ((req,res) => {
    const num = _.random(0,24);
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello');
    })

    greet();

}