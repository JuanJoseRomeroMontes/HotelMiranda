const swiperRooms = new Swiper('#swiper-rooms', {
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '#swiper-button-next-rooms',
      prevEl: '#swiper-button-prev-rooms',
    }
});

const swiperFeatures = new Swiper('#swiper-features', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '#swiper-pagination-features',
  }
});

const swiperFood = new Swiper('#swiper-food', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '#swiper-button-next-food',
    prevEl: '#swiper-button-prev-food',
  }
});

const swiperCarousel = new Swiper('#swiper-carousel', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '#swiper-pagination-carousel',
  }
});

const swiperCounterCarousel = new Swiper('#swiper-counter-carousel', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '#swiper-pagination-counter-carousel',
  }
});