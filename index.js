/**
 * Title: Uptime Monitoring Application
 * Author: K. M. Rajib Faysal
 * Date: 09/09/2021
 *
 */

// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello programmers');
};

// start the server
app.createServer();
