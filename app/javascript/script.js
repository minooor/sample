$(function() {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
    });
});

$(function() {
    $('#back a').on('click',function(event){
      $('body,html').animate({
        scrollTop:0
      },800);
      event.preventDefault();
    })
})