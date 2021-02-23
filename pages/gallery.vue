<template lang="pug">
article.page_container.sp-color_pink
  PageTop(name="gallery", caption="ギャラリー")
  .page_content_wrap.gallery_wrap
    .gallery
      transition-group.model_wrap(tag="div" name="model" appear)
        .model(v-for="index in 12" :key="index" v-show="modelFlag[index - 1]")
          .model_overlay(@click.self="closeModel(index)")
            transition(appear name="model_inside")
              .model_window(v-show="modelFlag[index - 1]")
                .model_cross_wrap
                  span.model_cross(@click="closeModel(index)")
                h2.model_title 可愛らしい編みおろしスタイル♪
                img.model_main_img(:src="bigImages[index - 1].image.url" alt="")
                .model_sub_img_wrap
                  .model_sub_img_cont(v-for="n in 4" :key="n" @click="changeImg(index, n)")
                    img.model_sub_img(:src="normalImages[index - 1].image.url" alt="")
                p.model_text 人気の編みおろしスタイルは取ってもキュート。
                  br
                  | ミモザやカスミソウなど、かわいらしい小花をアレンジするのが相性抜群!


      .gallery_grid

        picture.gallery_picture(v-for="index in 12" :key="index" @click="openModel(index)")
          source(:srcset="smallImages[index - 1].image.url" media="(max-width: 600px)")
          img.gallery_img(:src="normalImages[index - 1].image.url" alt="")
        

    //- FlowItem(v-for="(item, index) in list", :key="index", :item="item")
  //- button
  //- flowr image
  BannerItems
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
// import FlowItem from "~/components/FlowItem.vue";
import BannerItems from "~/components/BannerItems.vue";
import axios from "axios";

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
   }
  },
  async asyncData() {
   const gallery = await axios.get( 
     'https://jamstackblog.microcms.io/api/v1/gallery',
      {
        headers: { 'X-API-KEY': 'ac4bdc72-42db-40aa-87ad-f41ca20e95e1' }
      });

    return {
      smallImages : gallery.data.contents[0].image,
      normalImages:gallery.data.contents[1].image,
      bigImages:gallery.data.contents[2].image,
    }
  },
  methods: {
    openModel(index) {
      this.modelFlag.splice((index - 1), 1, true);
    },
    closeModel(index) {
      this.modelFlag.splice((index - 1), 1, false);
    },
    changeImg(index, n) {
      // モーダルのメイン画像をクリックしたサブ画像に入れ替える処理を入れる
      console.log(index, n);
    }
  },
};
</script>

<style lang="sass" scoped>

.sp-color_pink
  @media screen and (max-width: 600px)
    background-color: #FFF7FA

.model-enter,
.model-leave-to 
  opacity: 0;
 
.model-enter-active,
.model-leave-active 
  transition: opacity .5s;

.model_inside-enter,
.model_inside-leave-to
  transform: translateY(50px)

.model_inside-enter-active,
.model_inside-leave-active 
  transition: transform .5s cubic-bezier(0.64, 0.55, 0, 1.49);

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
  @media screen and (max-width: 600px)
    padding: 20px 15px 0
  

.gallery
  position: relative;

  .model_wrap
    position: relative;
    z-index: 100;

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
      max-height: calc(100vh - 20px);
      width: calc((100vh - 20px) / 2 - 20px);
      max-width: 98%;
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
      font-size: 13.8px;

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
      &:hover
        opacity: 0.6;
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
   grid-template: '1  2  3  4  ' '5  6  7  8  ' '9  10 11 12'
   @media screen and (max-width: 600px)
     grid-template: '1  2  3  ' '4  5  6  ' '7  8  9 ' '10 11 12'
     

   
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