AOS.init({
  duration: 1000,
});

//banner 슬라이드
const banner_list = new Swiper (".banner_list", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
      },
})

//menu list 슬라이드
const menu_list = new Swiper (".menu_list",{
 slidesPerView: 1.5,
 breakpoints: {
  750: {
    slidesPerView: 2.5,
  },
  1200: {
    slidesPerView: 4,
  }
 },

 centeredSlides:true,
 loop:true,
 autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
})