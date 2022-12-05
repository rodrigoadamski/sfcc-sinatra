'use strict';

var server = require('server');
//var controller = require('app_storefront_base/cartridge/controllers/Page')
//server.extend(controller)

server.get('Rendering', function (req, res, next) {
    //var myvariable = "Just a string"
    res.render("service/rendering");
    return next();
});


module.exports = server.exports();
