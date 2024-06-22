// -------------------------------------------------- detect touch
function is_touch_device() {
    return (
        !!("ontouchstart" in window) || // works on most browsers
        !!("onmsgesturechange" in window) // works on ie10
    );
}
if (is_touch_device()) {
    $(".touch-hide").hide();
    $(".touch-show").show();
    $(".swiper-prev-custom, .swiper-next-custom").addClass("mobile");
}

var vw = $(window).width() / 100;
var vh = $(window).height() / 100;
var root = document.documentElement;

// -------------------------------------------------- swiper
const swiper = new Swiper("#main-swiper", {
    speed: 400,
    spaceBetween: 0,
    allowTouchMove: false,
    autoHeight: true,
    // initialSlide: 1,
    navigation: {
        nextEl: ".swiper-next-custom",
        prevEl: ".swiper-prev-custom",
    },
    on: {
        slideChangeTransitionEnd: function () {
            $(".slide-content").scrollTop(0);
        },
    },
});

// -------------------------------------------------- hide nav on first slide
var mainNav = $(".main-navigation-bar");
function updateElementStyle() {
    if (swiper.activeIndex === 0) {
        mainNav.addClass("on-first-slide");
    } else {
        mainNav.removeClass("on-first-slide");
    }
}
updateElementStyle();
swiper.on("slideChange", updateElementStyle);

// -------------------------------------------------- simboli
$(".simboli span").each(function () {
    var simbolo = $(this);
    window.setInterval(function () {
        simbolo.html(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
});

// -------------------------------------------------- safari ios
(function () {
    var is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent),
        is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    if (is_ios && is_safari) {
        var $html = document.documentElement,
            classes = $html.className.concat(" is-ios-safari");
        $html.className = classes;
    }
})();
