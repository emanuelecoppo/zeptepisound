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
}

var vw = $(window).width() / 100;
var vh = $(window).height() / 100;
var root = document.documentElement;

// -------------------------------------------------- swiper
const swipers = document.querySelectorAll(".swiper");
swipers.forEach((container, index) => {
    new Swiper(container, {
        loop: true,
        speed: 400,
        spaceBetween: 10,
        autoplay: {
            delay: 2000,
        },
    });
});

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

// -------------------------------------------------- nav
$("#hamburger").on("click", function() {
    $(this).toggleClass("active");
    $("#dropdown").toggleClass("active");
});
$("#dropdown").on("click", function() {
    $("#hamburger").removeClass("active");
    $(this).removeClass("active");
});
$(document).on("click", function (event) {
    if (!$(event.target).closest(".main-navigation-bar").length) {
        // Click is outside the navigation bar
        $("#hamburger").removeClass("active");
        $("#dropdown").removeClass("active");
    }
});

// -------------------------------------------------- scroll
var lenis = new Lenis({
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// fix for id links
document.querySelectorAll('a[href^="#"]').forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
