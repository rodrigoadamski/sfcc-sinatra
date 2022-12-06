/*$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});
function greetings(){
  alert('Hello world');
}
*/

module.exports = {
    sliderMain: function () {
        console.log("entrei aqui");
        $(".slider-nav").slick({
          dots: false,
          centerMode: true,
          centerPadding: '60px',
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
    },
    sliderSec: function () {
      console.log("entrei aqui");
      $(".regular").slick({
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 550,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 1,
              slidesToScroll: 1,

            }
          },
          {
            breakpoint: 980,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 2,
              slidesToScroll: 1,

            }
          }
        ]
      });
  }
}
