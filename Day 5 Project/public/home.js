$(document).ready(function () {
    $(".icon1").click(function () {
        $(".toggle").css("display", "block")
    })
    $(".icon2").click(function () {
        $(".toggle").addClass("on")
    })
})

// $(window).mousemove(function (e) {
// 	$(".ring").css(
// 		"transform",
// 		translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))
// 	);
// });

var swiper = new Swiper(".mySwiper1", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".right",
        prevEl: ".left",
    },
});

var image = document.getElementsByClassName('img3');
new simpleParallax(image, {
    overflow: true,
    orientation: 'left',
    scale: 1.1,
});

var image = document.getElementsByClassName('img1');
new simpleParallax(image, {
    maxTransition: 60
});

var image = document.getElementsByClassName('img2');
new simpleParallax(image, {
    scale: 2.5,
    overflow: true,
});

var image = document.getElementsByClassName('img5');
new simpleParallax(image, {
    scale: 1.9,
    overflow: true,
    orientation: 'right',
});

const cursor = document.getElementById("cursor");
const stalker = document.getElementById("stalker");
document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    stalker.style.transform = `translate(${x}px, ${y}px)`;
});




var swiper = new Swiper(".mySwiper2", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });