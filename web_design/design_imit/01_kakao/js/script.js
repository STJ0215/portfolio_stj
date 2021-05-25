$(document).ready(function() {
    $('html').click(function(e) {
        if ($(e.target).hasClass("btn_menu")) {
            if ($(".box_submenu").hasClass("active")) {
                $(".box_submenu").removeClass("active");
            }
            else {
                $(".box_submenu").addClass("active");
            }
        }
        else if ($(e.target).hasClass("icon_btn_menu")) {
            if ($(".box_submenu").hasClass("active")) {
                $(".box_submenu").removeClass("active");
            }
            else {
                $(".box_submenu").addClass("active");
            }
        }
        else {
            $(".box_submenu").removeClass("active");
        }

        if ($(e.target).hasClass(".opt_relation")) {
            if ($(".list_opt").hasClass("active")) {
                $(".list_opt").removeClass("active");
            }
        }
    });

    $(".opt_relation").click(function() {
        if ($(".list_opt").hasClass("active")) {
            $(".list_opt").removeClass("active");
        } else {
            $(".list_opt").addClass("active");
        }
    });

    $(window).scroll(function() {
        $(this).scrollTop();

        if ($(this).scrollTop() < 200) {            
            $(".button_gototop").css({
                opacity: 0
            });
        }
        else if ($(this).scrollTop() > 200) {            
            $(".button_gototop").css({
                opacity: 1
            });
        }

        if ($(this).scrollTop() > 2350) {
            $(".button_gototop").css({
                bottom: 96
            });
        }
        else {
            $(".button_gototop").css({
                bottom: 26
            });
        }
    });
    
    $(".button_gototop").click(function() {
        //$(window).scrollTop();
        
        $("html").animate({scrollTop: 0});
        $("body").animate({scrollTop: 0});
    });
    
    /*슬릭슬라이더 */
    $(".slider-wrap").slick({
        slide: "div", //슬라이드 되어야 할 태그 ex) div, li
        infinite: true, //무한 반복 옵션
        slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true, // 자동 스크롤 사용 여부
        autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        prevArrow: "<div type='button' class='slick-prev1'></div>", // 이전 화살표 모양 설정"<button type='button' class='slick-prev'>Previous</button>"
        nextArrow: "<div type='button' class='slick-next1'></div>", // 다음 화살표 모양 설정"<button type='button' class='slick-next'>Next</button>"
        dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
        draggable: true, //드래그 가능 여부
  });
});
