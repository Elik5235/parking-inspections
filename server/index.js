const http = require ('http')
const app = require ('./app')
const {PORT} = require('./config');

const createServer = http.createServer(app);
server.listen(PORT,() =>{
    console.log('sto');
})