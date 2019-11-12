/**
 * @file An express mock server
 * @author Marx
 */

const express = require('express');
const path = require('path');
const open = require('open');
// var returnData = require('./returnData.js');

module.exports = function({config, port = 3000}) {
    const docPort = port || 3000;
    var app = express();
    app.use((req, res, next) => {
        req.config = config;
        next();           
    })
    // app.use(returnData);

    app.use('/docs', express.static(path.join(__dirname, '../docs')))

    open(`http://127.0.0.1:${docPort}/docs/index.html`);
    var server = app.listen(docPort, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Mock server listening at http://%s:%s', host, port);
    });
}



