
/* scroll */
$(document).ready(function () {
  $('.top_btn').hide();
  $('#scroll_btn').hide();

  $(window).scroll(function () {
    let scollpos = $(this).scrollTop();
    $('#txt1').text(scollpos);

    if (scollpos > 800) {
      $('.top_btn').fadeIn();
      $('#scroll_btn').fadeIn();
    } else {
      $('.top_btn').fadeOut();
      $('#scroll_btn').fadeOut();
    }

    //scroll 350~799
    if (scollpos >= 800 && scollpos < 1600) {
      $('#scroll_btn ul .scb1').addClass('active');
      $('#scroll_btn ul .scb1 a .scroll_hover').addClass('active');
    } else {
      $('#scroll_btn ul .scb1').removeClass('active');
      $('#scroll_btn ul .scb1 a .scroll_hover').removeClass('active');
    }

    //scroll 800~1599
    if (scollpos >= 1600 && scollpos < 2400) {
      $('#scroll_btn ul .scb2').addClass('active');
      $('#scroll_btn ul .scb2 a .scroll_hover').addClass('active');
    } else {
      $('#scroll_btn ul .scb2').removeClass('active');
      $('#scroll_btn ul .scb2 a .scroll_hover').removeClass('active');
    }

    //scroll 1600~2999
    if (scollpos >= 2400 && scollpos < 3200) {
      $('#scroll_btn ul .scb3').addClass('active');
      $('#scroll_btn ul .scb3 a .scroll_hover').addClass('active');
    } else {
      $('#scroll_btn ul .scb3').removeClass('active');
      $('#scroll_btn ul .scb3 a .scroll_hover').removeClass('active');
    }
  });

  $('#scroll_btn ul .scb1').click(function () {
    $('body,html').animate({ scrollTop: '800px' }, 700);
  });
  $('#scroll_btn ul .scb2').click(function () {
    $('body,html').animate({ scrollTop: '1600px' }, 700);
  });
  $('#scroll_btn ul .scb3').click(function () {
    $('body,html').animate({ scrollTop: '2400px' }, 700);
  });

  //TOP버튼
  $('.top_btn').click(function () {
    $('html,body').animate({ scrollTop: '0' });
  });
});

/* Header_gnb */
$(document).ready(function () {
  $('.sub').hide();

  $('.main').hover(
    function () {
      $(this).find('.sub').stop().slideDown();
    },
    function () {
      $(this).find('.sub').stop().slideUp();
    }
  );
});

/* section3 */
$(document).ready(function () {
  let $img = $('.changeimg ul li');
  let $btn = $('.btn ul li');
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;

  function changeImg(idx) {
    if (oldidx != idx) {
      $btn.eq(oldidx).removeClass('active');
      $btn.eq(idx).addClass('active');
      $img.eq(oldidx).stop().fadeOut('300');
      $img.eq(idx).stop().fadeIn('300');
    }
    oldidx = idx;
  }

  function changeAuto() {
    idx++;
    if (idx > img_n - 1) {
      idx = 0;
    }
    changeImg(idx);
  }

  timer = setInterval(changeAuto, 4000);

  $btn.click(function () {
    clearInterval(timer);
    idx = $(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto, 4000);
  });

  $rbtn.click(function () {
    clearInterval(timer);
    idx++;
    if (idx > img_n - 1) {
      idx = 0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto, 4000);
  });
});


$(document).ready(function () {
//모바일용 메뉴버튼_________ 
$(".mo_view").css({"right": "-60%"});
$(".close").hide();

$(".mo_menu_btn").click(function () {
  $(".mo_view").stop(true, true).animate({"right": "0%"});
  $(".close").show();
});

$(".close").click(function () {
  $(".mo_view").stop(true, true).animate({"right": "-60%"});
  $(".close").hide();
});

});