window.jQuery = window.$ = require('jquery');
var processInclude = require('basejs/util');

$(document).ready(function () {
    processInclude(require('basejs/components/menu'));
    processInclude(require('basejs/components/cookie'));
    processInclude(require('basejs/components/consentTracking'));
    processInclude(require('basejs/components/footer'));
    processInclude(require('basejs/components/miniCart'));
    processInclude(require('basejs/components/collapsibleItem'));
    processInclude(require('basejs/components/search'));
    processInclude(require('basejs/components/clientSideValidation'));
    processInclude(require('basejs/components/countrySelector'));
    processInclude(require('basejs/components/toolTip'));
});

require('basejs/thirdParty/bootstrap');
require('basejs/components/spinner');
require('slick-carousel');
