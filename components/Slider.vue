<template lang="pug">
.slider
  img(class="slide_text" :src="require('@/assets/images/top_sliders/slide_text.svg')")
  swiper(:options="swiperOption")
    swiper-slide(v-for="(images, index) in slideImages" :key="index")
      img(:src="require('@/assets/images/top_sliders/'+images+'')" alt="")
    .swiper-pagination(slot="pagination" class="swiper-pagination")
    .swiper-button-prev(slot="button-prev" class="swiper-button-prev")
    .swiper-button-next(slot="button-next" class="swiper-button-next")
  .bottom-bar

</template>

<script>
export default {
  components: {
  },
  props: {
  },
  data() {
    return {
      swiperOption: {
        speed: 1000,//スライドの切り替わりスxピード
        centeredSlides: true,//スライダーを真ん中に
        paginationClickable: true,
        navigation: { //ナビゲーション設定
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: { //ページネーション設定
          el: '.swiper-pagination',
          clickable: true
        },
      },
      slideImages:[
        'slides1.png',
        'slides2.png',
        'slides3.png',
        'slides4.png',
        'slides5.png',
        'slides6.png',
        'slides7.png',
        'slides8.png',
      ]
    }
  }
};
</script>

<style lang="sass">
.slider
  width: 100%;
  position: relative;
  .bottom-bar
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
    background-color: #FFF7FA;
  .slide_text
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 29%;
    z-index: 4;
  .swiper-container
    height: 100%;
    width: 100%;
    max-height: 720px;
    margin: 0 auto;
    padding-bottom: 160px;
    @media (min-width: 1441px)
      max-width: 100%;
      padding-bottom: 160px;
    .swiper-wrapper
      height: 720px;
    img
      transform: translate(10%);
      height: 100%;
      object-fit: cover;
      @media (min-width: 1441px)
        width: 100%;
        transform: translate(0);
    .swiper-pagination
      max-width: 1200px;
      display: flex;
      bottom: 0%;
      left: 50%;
      transform: translateX(-50%)
      .swiper-pagination-bullet
        width: 150px;
        max-width: 150px;
        height: 160px;
        margin: 0px;
        display: block;
        border-radius: 0px;
        opacity: 1;
        background: inherit
        @for $index from 1 through 8
          &:nth-child(#{$index})
            background-image: url(~@/assets/images/top_sliders/slide_mini#{$index}.png);
        &:hover
          opacity: 0.6;
    .swiper-pagination-bullet-active
      background: inherit
    .swiper-button-prev,.swiper-button-next
      position: absolute;
      transform: translate(-50%, -50%);
      bottom: 50%;
    .swiper-button-prev
      left: 6%;
      &:after
        content: '';
        display: block;
        width: 11px;
        height: 24px;
        background-image: url(~@/assets/images/top_sliders/slide_prev.svg);
        background-size: cover;
    .swiper-button-next
      right: 4%;
      &:after
        content: '';
        display: block;
        width: 11px;
        height: 24px;
        background-image: url(~@/assets/images/top_sliders/slide_next.svg);
        background-size: cover;
        background-position-x: -11px;
</style>