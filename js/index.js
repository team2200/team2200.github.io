$(document).ready(function () {
  $(".span1").click(function () {
    $(this).fadeOut();
    $("#clickLogo").fadeIn();
  });
  $("#clickLogo").click(function () {
    $(".span1").fadeIn();
    $(this).fadeOut();
  });

  $(".span2").click(function () {
    $(this).fadeOut();
    $("#clickLogo2").fadeIn();
  });
  $("#clickLogo2").click(function () {
    $(".span2").fadeIn();
    $(this).fadeOut();
  });

  $(".span3").click(function () {
    $(this).fadeOut();
    $("#clickBus").fadeIn();
  });
  $("#clickBus").click(function () {
    $(".span3").fadeIn();
    $(this).fadeOut();
  });

  $(".span4").click(function () {
    $(this).fadeOut();
    $("#clickExitL").fadeIn();
  });
  $("#clickExitL").click(function () {
    $(".span4").fadeIn();
    $(this).fadeOut();
  });

  $(".span5").click(function () {
    $(this).fadeOut();
    $("#clickMovie1").fadeIn();
  });
  $("#clickMovie1").click(function () {
    $(".span5").fadeIn();
    $(this).fadeOut();
  });

  $(".span6").click(function () {
    $(this).fadeOut();
    $("#clickMovie2").fadeIn();
  });
  $("#clickMovie2").click(function () {
    $(".span6").fadeIn();
    $(this).fadeOut();
  });

});



$(document).ready(function() {
  $('html, body').scrollTop(0);
  $content = $('.content');
  $link = $content.find('a');
  $link.on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var options = 'width=1080, height=720, status=no, menubar=no, toolbar=no';
    window.open(href, '', options);
  });
});

$(window).on('load', function() {
  var $header = $('.header');
  var $title = $('.title');
  var $main = $('.main');
  var delay = 1000;
  setTimeout(function() {
    $title.fadeIn(delay);
    setTimeout(function() {
      $title.find('div').eq(0).show(0);
      setTimeout(function() {
        $title.find('div').eq(0).fadeOut(delay, function() {
          $title.find('div').eq(1).show(0);
          setTimeout(function() {
            $title.find('div').eq(1).fadeOut(delay, function() {
              $title.find('div').eq(2).show(0);
              setTimeout(function() {
                $title.find('div').eq(2).fadeOut(delay, function() {
                  $title.find('div').eq(3).show(0);
                  setTimeout(function() {
                    $title.find('div').eq(3).fadeOut(delay, function() {
                      $header.fadeOut(delay);
                      $main.animate({
                        'margin-top': 0
                      }, delay);
                      $('html, body').scrollTop(0);
                      $('body').removeClass('fixed');
                    });
                  }, delay * 0.8);
                });
              }, delay);
            });
          }, delay);
        });
      }, delay);
    }, delay);
  }, delay * 0.8);
});