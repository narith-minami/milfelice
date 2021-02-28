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
  created() {
  },
  props: {
    // slideImages: Array
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
    top: 45%;
    left: 31%;
    z-index: 4;
    @media (min-width: 1441px)
      left: 38%;
    @media (max-width: 1220px)
      width: 41.25%;
      min-width: 173px;
  .swiper-container
    height: 100%;
    width: 100%;
    max-height: 720px;
    margin: 0 auto;
    padding-bottom: 160px;
    @media (min-width: 1441px)
      max-width: 100%;
      padding-bottom: 160px;
    @media (max-width: 600px)
      padding-bottom: 13.33vw;
    .swiper-wrapper
      height: 720px;
      @media (max-width: 375px)
        height: 212px;
    img
      transform: translate(-50%);
      height: 100%;
      object-fit: cover;
      left: 50%;
      position: absolute;
      width: 100%;
      max-width: 1200px;
      @media (min-width: 1441px)
        width: 100%;
        transform: translate(0);
        left: 0px;
        max-width: inherit;
      @media (max-width: 1290px)
        width: 100%;
    .swiper-pagination
      max-width: 1200px;
      display: flex;
      bottom: 0%;
      left: 50%;
      transform: translateX(-50%)
      .swiper-pagination-bullet
        width: 12.5vw;
        max-width: 150px;
        max-height: 160px;
        height: 13.33vw;
        margin: 0px;
        display: block;
        border-radius: 0px;
        opacity: 1;
        background: inherit
        @for $index from 1 through 8
          &:nth-child(#{$index})
            background-image: url(~@/assets/images/top_sliders/slide_mini#{$index}.png);
            background-size: cover;
        &:hover
          opacity: 0.6;
    .swiper-pagination-bullet-active
      background: inherit
    .swiper-button-prev,.swiper-button-next
      position: absolute;
      transform: translateY(-50%);
      top: 45%;
      display: block;
      @media (max-width: 375px)
        width: 5.46px
        height: 13.1px
        top: 50%;
    .swiper-button-prev
      left: calc(50% - 640px);
      right: auto;
      @media (max-width: 1290px)
        left: 30px;
      @media (max-width: 375px)
        left: 10px;
      &:after
        content: '';
        display: block;
        width: 11px;
        height: 24px;
        background-image: url(~@/assets/images/top_sliders/slide_prev.svg);
        background-size: cover;
        margin: 50% auto;
        @media (max-width: 375px)
          width: 5.46px
          height: 13.1px
    .swiper-button-next
      right: calc(50% - 640px);
      left: auto;
      @media (max-width: 1290px)
        right: 30px;
      @media (max-width: 375px)
        right: 10px;
      &:after
        content: '';
        display: block;
        width: 11px;
        height: 24px;
        margin: 50% auto;
        background-image: url(~@/assets/images/top_sliders/slide_next.svg);
        background-size: cover;
        background-position-x: -11px;
        @media (max-width: 375px)
          width: 6.46px
          height: 13.1px
          background-position-x: 0px;
</style>