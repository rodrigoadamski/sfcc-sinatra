function displayPromoBox() {
    document.getElementById("cart-show-promo").style.display = "block";
}

//para passar no .util via função ou objetico com função no atributo
module.exports = {
    doShow: function() {
        $(".btn-show-code").on("click", displayPromoBox)
    }
}


/*
function say(){
    alert('Hi');
}
module.exports = {
    sayHello: function(){
        $(".btn-show-code").on("click", say);
    }
}
*/