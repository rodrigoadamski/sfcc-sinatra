// var base = module.superModule; >>> esse so iria sobrescrever no backend

//esse aqui para sobrescrever no front
var base = require("basejs/addressBook/addressBook")

base.removeAddressConfirmation = function() {
    $('.delete-confirmation-btn').click(function (e) {
        alert('Hello world');
    })
}


base.removeNovo = function() {
    alert('Carregou');
}

module.exports = base;
