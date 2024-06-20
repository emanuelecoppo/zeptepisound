// -------------------------------------------------- scroll
// if (document.getElementById("lenis-disable") === null) {
//   const lenis = new Lenis({
//   });
//   function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//   }
//   requestAnimationFrame(raf);
// }
// else {
//   document.getElementById("page-wrapper").classList.add("snap-container");
// }

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

// -------------------------------------------------- stop audio & video
// // Function to stop the YouTube video
// function stopVideo() {
//     var iframe = document.getElementById("lalala");
//     var iframeSrc = iframe.src;
//     // Adding ?enablejsapi=1 to the URL if not already present
//     if (iframeSrc.indexOf("?") === -1) {
//         iframeSrc += "?enablejsapi=1";
//     } else {
//         iframeSrc += "&enablejsapi=1";
//     }
//     iframe.src = iframeSrc;
//     // Sending command to stop the video
//     iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
// }

// -------------------------------------------------- simboli
$(".simboli span").each(function () {
    var simbolo = $(this);
    window.setInterval(function () {
        simbolo.html(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
});
