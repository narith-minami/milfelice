<template lang="pug">
article.page_container.sp-color_pink
  PageTop(name="gallery", caption="ギャラリー")
  .page_content_wrap.gallery_wrap
    .gallery
      transition-group.model_wrap(tag="div" name="model" appear)
        .model(v-for="index in galleryList.length" :key="index" v-show="modelFlag[index - 1]")
          .model_overlay(@click.self="closeModel(index)")
            transition(appear name="model_inside")
              .model_window(v-show="modelFlag[index - 1]")
                .model_cross_wrap
                  span.model_cross(@click="closeModel(index)")
                h2.model_title {{ galleryList[index -1].title }}
                .model_grid
                  img.model_main_img(:src="modelMainImg[index - 1] + '?w=400'" alt="")
                  .model_sub_img_wrap
                    .model_sub_img_cont(v-for="n in imgCount(index)" :key="n" @click="changeImg(index, n)")
                      img.model_sub_img(:src="galleryList[index - 1][`image_${n}`].url  + '?w=200'" alt="")
                  .model_text_cont
                    p.model_text {{ galleryList[index - 1].comment }}

      .gallery_grid

        picture.gallery_picture(v-for="index in galleryList.length" :key="index" @click="openModel(index)")
          source(:srcset="galleryList[index - 1].image_1.url + '?w=190'" media="(max-width: 600px)")
          img.gallery_img(:src="galleryList[index - 1].image_1.url + '?w=300'" alt="")
        

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
  async asyncData(context) {

      const galleryList = await context.app.$getData("gallery");

      let modelMainImg = galleryList.map((gallery) => {
       return gallery.image_1.url
      });
      return { galleryList, modelMainImg }

  },
  methods: {
    openModel(index) {
      this.modelFlag.splice((index - 1), 1, true);
    },
    closeModel(index) {
      this.modelFlag.splice((index - 1), 1, false);
      this.modelMainImg.splice((index - 1), 1, this.galleryList[index - 1]['image_1'].url);
    },
    changeImg(index, n) {
      // モーダルのメイン画像をクリックしたサブ画像に入れ替える処理を入れる
      this.modelMainImg.splice((index - 1), 1, this.galleryList[index - 1][`image_${n}`].url);
    },
    imgCount(index) {
     const galleryArray = Object.keys(this.galleryList[index - 1]);
     if (!galleryArray.includes('image_2')) return 1;
     if (!galleryArray.includes('image_3')) return 2;
     if (!galleryArray.includes('image_4')) return 3;
     return 4;
    }
  },
};
</script>

<style lang="sass" scoped>

.sp-color_pink
  @media screen and (max-width: 600px)
    background-color: #FFF7FA

.model-enter
  opacity: 0
 
.model-enter-active
  transition: opacity .5s

.model_inside-enter
  transform: translateY(5%)

.model_inside-enter-active
  transition: transform .5s ease-out

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
      display: flex
      justify-content: center
      align-items: center

    
    &_window
      border-radius: 10px
      background-color: #fff
      box-sizing: border-box
      width: 70%
      max-width: 667px
      padding: 0.7% 1.5% 4%
      @media screen and (min-width: 970px) and (min-height: 800px)
        width: 100%
        max-width: 890px
        padding: 10px 20px 45px
      @media screen and (max-width: 800px)
        font-size: 13px

    &_cross_wrap
      padding-right: 5px
      text-align: right

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
      margin-top: 2.7%;
      padding-left: 5px
      color: #3A3A3A
      font-size: 1.15em
      letter-spacing: 0
      @media screen and (min-width: 970px) and (min-height: 800px)
        font-size: 24px

    &_grid
      display: grid
      grid-template-areas: 'main sub' 'main text' 
      grid-template-columns: 29.1vw 1fr
      column-gap: 2.4%
      margin-top: 1.8%
      @media screen and (min-width: 970px)
        grid-template-columns: 300px 1fr
        column-gap: 15px
        margin-top: 11px

      @media screen and (min-width: 970px) and (min-height: 800px)
        grid-template-columns: 400px 1fr
        column-gap: 20px
        margin-top: 15px
        
        
    &_main_img
      grid-area: main
      width: 100%
      height: calc(29.1vw * 1.41)
      object-fit: cover
      @media screen and (min-width: 970px)
        height: 423px
        
      @media screen and (min-width: 970px) and (min-height: 800px)
        height: 564px  

    &_sub_img_wrap
      grid-area: sub
      display: flex
      flex-wrap: wrap
      width: 100%
      height: min-content
      margin-top: 5px

    &_sub_img_cont
      position: relative
      width: 12vw
      height: 12vw
      margin-right: 2.5%
      margin-bottom: 3.5%
      overflow: hidden
      cursor: pointer
      @media screen and (min-width: 970px)
        width: 117px
        height: 117px

      @media screen and (min-width: 970px) and (min-height: 800px)
        width: 156px
        height: 156px
        margin-right: 11px
        margin-bottom: 15px
      &:hover
        opacity: 0.6;
      &:last-child
        margin-right: 0

    &_sub_img
      position: absolute;
      width: 16.1vw
      height: auto
      left: calc((16.1vw - 12vw) / -2)
      top: calc((16.1vw - 12vw) / -2)
      @media screen and (min-width: 970px)
        width: 156px
        left: -19.5px
        top: -19.5px

      @media screen and (min-width: 970px) and (min-height: 800px)
        width: 209px
        left: -26px
        top: -26px

    &_text_cont
      grid-area: text
      display: flex
      align-items: flex-end
      

    &_text
      font-size: 0.8em
      white-space:pre-wrap
      word-wrap:break-word
      @media screen and (min-width: 970px) and (min-height: 800px)
        font-size: 16px
  
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