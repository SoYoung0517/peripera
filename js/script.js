$(document).ready(function(){
  //aos
  AOS.init(); 
    
  //배너스와이퍼
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 2500
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

    // 헤더 영역
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
          $('header').addClass('active');
        }else{
          $('header').removeClass('active');
        }
      });

    // 메뉴 영역
    $(".hamberger").on("click",function(){
        $(".left-menu .left-menu-wrap").toggleClass("active");
    });


    $(".tab02>li>a").on("click",function(){
        if($(this).hasClass("open")==true){ 
            event.preventDefault();
            $(this).siblings(".sub-tab").stop().slideUp(300);
            $(this).removeClass("open");
        }else{
            $(".sub-tab").stop().slideUp(300);
            event.preventDefault();
            $(this).siblings(".sub-tab").stop().slideDown(300);
            $(".tab02>li>a").removeClass("open");
            $(this).addClass("open");
        }
    });
    
    //인스타 스토리
    $('.con').click(function(){
      $(this).addClass('active');
      $(this).parent('.con-box').siblings().children('.con').removeClass('active');
    });






});//end