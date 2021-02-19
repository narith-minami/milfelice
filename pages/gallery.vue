<template lang="pug">
article.page_container
  PageTop(title="Gallery", caption="ギャラリー")
  .page_content_wrap.gallery_wrap
    .gallery
 
      .model(v-for="index in 16" :key="index" v-if="modelFlag[index - 1]")
        .model_overlay(@click="closeModel(index)")
        .model_window
          .model_cross_wrap
            span.model_cross(@click="closeModel(index)")
          h2.model_title 可愛らしい編みおろしスタイル♪
          img.model_main_img(:src="require('@/assets/images/gallery/gallery_' + index + '_2x.png')" alt="")
          .model_sub_img_wrap
            .model_sub_img_cont
              img.model_sub_img(:src="require('@/assets/images/gallery/gallery_' + index + '.png')" alt="")
            .model_sub_img_cont
              img.model_sub_img(:src="require('@/assets/images/gallery/gallery_' + index + '.png')" alt="")
            .model_sub_img_cont
              img.model_sub_img(:src="require('@/assets/images/gallery/gallery_' + index + '.png')" alt="")
            .model_sub_img_cont
              img.model_sub_img(:src="require('@/assets/images/gallery/gallery_' + index + '.png')" alt="")
          p.model_text 人気の編みおろしスタイルは取ってもキュート。
            br
            | ミモザやカスミソウなど、かわいらしい小花をアレンジするのが相性抜群!


      .gallery_grid

        picture.gallery_picture(v-for="index in 16" :key="index" @click="openModel(index)")
          source(:srcset="require('@/assets/images/gallery/gallery_' + index + '_sp.png')" media="(max-width: 600px)")
          img.gallery_img(:src="require('@/assets/images/gallery/gallery_' + index + '.png')" alt="")
        

    //- FlowItem(v-for="(item, index) in list", :key="index", :item="item")
  //- button
  //- flowr image
  BannerItems
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
// import FlowItem from "~/components/FlowItem.vue";
import BannerItems from "~/components/BannerItems.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    // FlowItem,
    BannerItems,
  },
  data() {
   return {
    modelFlag: [false, false, false, false, 
                false, false, false, false, 
                false, false, false, false, 
                false, false, false, false, ]
   }
  },
  methods: {
    openModel(index) {
      this.modelFlag.splice((index - 1), 1, true);
    },
    closeModel(index) {
      this.modelFlag.splice((index - 1), 1, false);

    }
  },
};
</script>

<style lang="sass" scoped>
.hidden
  visibility: hidden !important
  opacity: 0;

.gallery_wrap
  max-width: 1440px
  width: 100%
  background-color: #FFF7FA
  margin-top: 0
  margin-bottom: 0
  padding: 160px 120px 80px
  box-sizing: border-box;
  @media screen and (max-width: 900px)
    padding: 80px 60px 40px

.gallery
  position: relative;

  .model
    transition: opacity 0.4s
    &_overlay
      position: fixed;
      z-index: 2;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(13, 13, 13, 0.6);
    
    &_window
      position: absolute;
      z-index: 3;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      max-width: 640px
      width: 92%
      padding: 40px 40px 160px
      border-radius: 10px
      background-color: #fff
      box-sizing: border-box

    &_cross_wrap
      position: absolute
      top: 10px;
      right: 20px;

    &_cross
      display: inline-block;
      vertical-align: middle;
      color: #98A6B5;
      line-height: 1;
      width: 1.2em;
      height: 0.13em;
      background: currentColor;
      border-radius: 10px;
      position: relative;
      transform: rotate(45deg);
      cursor: pointer;
      &::before
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background: inherit;
         border-radius: inherit;
         transform: rotate(90deg);

    &_title
      margin-top: 20px
      font-size: 24px
      color: #3A3A3A

    &_main_img
      margin-top: 5px
      width: 100%

    &_sub_img_wrap
      margin-top: 37px
      display: flex
      width: 100%

    &_sub_img_cont
      position: relative
      width: 130px
      height: 130px
      margin-right: 12px
      overflow: hidden
      &:last-child
        margin-right: 0

    &_sub_img
      position: absolute;
      width: 160px;
      top: 0;
      left: -15px;
      

    &_text
      margin-top: 40px

  &_grid
   display: grid
   grid-template: '1  2  3  4  ' '5  6  7  8  ' '9  10 11 12' '13 14 15 16'
   
  &_picture
    width: 100%
    &:hover
      opacity: 0.6;
    > .gallery_img
      width: 100%
      height: 100%
      object-fit: cover
      cursor: pointer

</style>