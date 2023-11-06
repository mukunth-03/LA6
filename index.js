const http = require("http");

const myserver =http.createServer((req,res) => {
    console.log(req.headers);
    res.end("hello from server");

});

myserver.listen(8000,() => {
    console.log('listening to the port no 8000')
});