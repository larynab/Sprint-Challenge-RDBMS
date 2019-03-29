//server start 
//export from server.js
const server = require('./server.js');

const port = process.env.PORT || 8400;
server.listen(port, () => {
    console.log(`\n** Project & Actions API running on http://localhost:${port} **\n`)
});