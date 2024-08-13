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

  //promotion 토글
  const promotionEl = document.querySelector('.promotion')
  const promotionToggle = document.querySelector('.toggle-promotion')
  const promotionToggleE = document.querySelector('.toggle-promotion li')
  let hidePromotion = false;

  promotionToggle.addEventListener('click',()=>{
      if(promotionToggleE.textContent === 'expand_less'){
        promotionToggleE.textContent = 'expand_more'
      }else{
        promotionToggleE.textContent = 'expand_less'
      }
      hidePromotion = !hidePromotion
      if(hidePromotion){
        promotionEl.classList.add('off')
      }else{
        promotionEl.classList.remove('off')
      }
  })

  // visual-wrap 이미지가 화면 로딩시 순서대로 나오도록하기
  const fade = document.querySelectorAll('.main-visual-wrap .fade-in')
  fade.forEach((f, i)=>{
    gsap.to(f,1,{
      delay:(i+1)*.7,
      opacity : 1
    })

  })
  // scroll magic
const scrollEl = document.querySelectorAll('.scroll')
scrollEl.forEach(s=>{
  new ScrollMagic.Scene({
    triggerElement:scrollEl,
    triggerHook : .5

  }).setClassToggle(s,'show')
  .addTo(newScrollMagic.Controller())
})