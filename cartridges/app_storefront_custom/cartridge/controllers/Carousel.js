'use strict';

var server = require('server');
//var controller = require('app_storefront_base/cartridge/controllers/Page')
//server.extend(controller)

server.get('carouselShow', function (req, res, next) {
    //var myvariable = "Just a string"
    res.render("carousel/carousel");
    return next();
});


module.exports = server.exports();
