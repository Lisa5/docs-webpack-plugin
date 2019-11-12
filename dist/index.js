/**
 * @file plugin entry point
 * @author Lisa
 */

const server = require('./server.js');

/**
 * @class LuDocWebpackPlugin
 *
 * @param {Object} param data that plugin needs
 */
function LuDocWebpackPlugin({ port = 3000 }) {
    this.port = port;
}

LuDocWebpackPlugin.prototype.apply = function (compiler) {
    server({ port: this.port });
    compiler.plugin("emit", (compilation, callback) => {
        callback();
    });
};

module.exports = LuDocWebpackPlugin;