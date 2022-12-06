function displayPromoBox() {
    document.getElementById("cart-show-promo").style.display = "block";
}

module.exports = {
    doShow: function() {
        $(".btn-show-code").on("click", displayPromoBox)
    }
}