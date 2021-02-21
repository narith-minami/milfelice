<template lang="pug">
article.page_container
  PageTop(name="gallery", caption="ギャラリー")
  .page_content_wrap.gallery_wrap
    .gallery
      transition-group(tag="div" name="model" appear)
        .model(v-for="index in 12" :key="index" v-show="modelFlag[index - 1]")
          .model_overlay(@click.self="closeModel(index)")
            .model_window
              .model_cross_wrap
                span.model_cross(@click="closeModel(index)")
              h2.model_title 可愛らしい編みおろしスタイル♪
              img.model_main_img(:src="mainImg[index - 1]" alt="")
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

        picture.gallery_picture(v-for="index in 12" :key="index" @click="openModel(index)")
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
                ],
    
    mainImg: [
      require("@/assets/images/gallery/gallery_1_2x.png"),
      require("@/assets/images/gallery/gallery_2_2x.png"),
      require("@/assets/images/gallery/gallery_3_2x.png"),
      require("@/assets/images/gallery/gallery_4_2x.png"),
      require("@/assets/images/gallery/gallery_5_2x.png"),
      require("@/assets/images/gallery/gallery_6_2x.png"),
      require("@/assets/images/gallery/gallery_7_2x.png"),
      require("@/assets/images/gallery/gallery_8_2x.png"),
      require("@/assets/images/gallery/gallery_9_2x.png"),
      require("@/assets/images/gallery/gallery_10_2x.png"),
      require("@/assets/images/gallery/gallery_11_2x.png"),
      require("@/assets/images/gallery/gallery_12_2x.png"),
    ]
   }
  },
  methods: {
    openModel(index) {
      this.modelFlag.splice((index - 1), 1, true);
      if (process.client) {
         document.body.classList.add('stop');
       }
    },
    closeModel(index) {
      this.modelFlag.splice((index - 1), 1, false);
      if (process.client) {
         document.body.classList.remove('stop');
       }
    }
  },
};
</script>

<style>
  .stop {
    height: 100vh;
    overflow-y: hidden;
    padding-right: 15px;
  }


</style>

<style lang="sass" scoped>

.model-enter
  opacity: 0;

.model-leave-to 
  opacity: 0;
 
.model-enter-active
  transition: all .3s;

.model-leave-active 
  transition: all .3s;


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
    &_overlay
      position: fixed;
      z-index: 2;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(13, 13, 13, 0.6);
    
    &_window
      // margin: 20px auto 0
      // max-width: 640px
      // width: 92%
      // padding: 20px 40px 160px
      border-radius: 10px
      background-color: #fff
      box-sizing: border-box
      margin: 10px auto 0;
      height: calc(100vh - 20px);
      width: calc((100vh - 20px) / 2 - 25px);
      padding: 5px 15px 30px;

    &_cross_wrap
      text-align: right
      // transform: translate(20px)

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
      // margin-top: 14px
      // font-size: 24px
      color: #3A3A3A
      font-size: 14px;

    &_main_img
      margin-top: 5px
      width: 100%

    &_sub_img_wrap
      // margin-top: 37px
      display: flex
      width: 100%
      margin-top: 5px;

    &_sub_img_cont
      position: relative
      // width: 130px
      // height: 130px
      // margin-right: 12px
      width: 57px
      height: 57px
      margin-right: 5px
      overflow: hidden
      cursor: pointer
      &:last-child
        margin-right: 0

    &_sub_img
      position: absolute;
      width: 61px;
      top: 0;
      left: -2px;
      

    &_text
      // margin-top: 40px
      margin-top: 20px;
      font-size: 12px;

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