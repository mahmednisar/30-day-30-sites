$('.nav li a').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      var offsetTop = $(target).offset().top;
      $('html, body').animate({
        scrollTop:offsetTop
    }, 1000);
  });