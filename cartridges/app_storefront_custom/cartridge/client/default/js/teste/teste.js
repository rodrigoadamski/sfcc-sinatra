function greetings(){
    alert('Hello world');
}

module.exports = {
    sayHello: function(){
        $(".teste").on("click", greetings);
    }
}