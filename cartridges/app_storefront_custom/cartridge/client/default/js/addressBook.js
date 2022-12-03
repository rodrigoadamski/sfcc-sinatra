'use strict';

var processInclude = require('basejs/util');

$(document).ready(function () {
    //como estou colocando ponto ele vai carregar o local
    processInclude(require('./addressBook/addressBook'));
});
