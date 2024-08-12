const swiperNotice = new Swiper('.notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay : true
  });
  const swiperPromotion = new Swiper('.promotion .swiper', {
    loop: true,
    autoplay : true,
    slidesPerView : 3,
    centeredSlides : true,
    spaceBetween : 15,
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    }
  });