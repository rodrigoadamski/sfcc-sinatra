'use strict';

var processInclude = require('basejs/util');

$(document).ready(function () {
    processInclude(require('./cart/cart'));
});
