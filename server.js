const http = require('http');
const dt = require('./modules/utils');
const messages = require('./lang/messages/en/user');
const url = require('url');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    const name = q.name || '_';
    const message = messages.MESSAGE.replace('%1', name).replace('%2', dt.getDate());
    res.writeHead(200, {'Content-Type': 
    'text/html'});
    res.write(`${message}`);
    res.end();
}).listen(PORT);