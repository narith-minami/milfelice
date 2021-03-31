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
                .model_cross_wrap(@click="closeModel(index)")
                  span.model_cross
                h2.model_title {{ galleryList[index -1].title }}
                .model_grid(:class="{ 'oblong': oblongFlag }")
                  img.model_main_img.model-enter-active(:src="modelMainImg[index - 1] + '?w=440'" :class="{ 'model-enter' : changeImgFlag }" v-if="ifImgFlag" alt="")
                  .model_sub_img_wrap
                    .model_sub_img_cont(v-for="n in imgCount(index)" :key="n" @click="changeImg(index, n)")
                      img.model_sub_img(:src="galleryList[index - 1][`image_${n}`].url  + '?w=240'" alt="")
                  .model_text_cont
                    p.model_text(v-html="galleryList[index - 1].comment")

      .gallery_grid

        picture.gallery_picture(:class="'gallery_picture_' + index" v-for="index in galleryList.length" :key="index" @click="openModel(index)")
          source(:srcset="galleryList[index - 1].image_1.url + '?w=190'" media="(max-width: 600px)")
          img.gallery_img(:src="galleryList[index - 1].image_1.url + '?w=300'" alt="")
        
  //- flowr image
  BannerItems
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
import BannerItems from "~/components/BannerItems.vue";


export default {
  layout: "page",
  components: {
    PageTop,
    BannerItems,
  },
  head() {
    return {
      title: 'ギャラリー',
      meta: [
      { name: 'viewport', content: this.viewport }
    ]
    }
  },
  data() {
   return {
    modelFlag: [false, false, false, false, 
                false, false, false, false, 
                false, false, false, false, 
                false, false, false, false, 
                ],
    changeImgFlag: false,
    ifImgFlag: true,
    oblongFlag: false,
    viewport: 'width=device-width,initial-scale=1'
   }
  },
  async asyncData(context) {
    const galleryList = await context.app.$getData("gallery?limit=20");

      let modelMainImg = galleryList.map((gallery) => {
       return gallery.image_1.url
      });
      return { galleryList, modelMainImg }

  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.switchViewport, false);
      this.switchViewport();
    }
  },
  mounted() {
        this.galleryList.map((gallery) => {
          if (gallery.comment !== undefined) {
            gallery.comment = gallery.comment.replace(/\n/g, '<br/>')
          }
        return gallery
        });
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("resize", this.switchViewport);
    }
  },
  methods: {
    openModel(index) {
      this.modelFlag.splice((index - 1), 1, true);
    },
    closeModel(index) {
      this.modelFlag.splice((index - 1), 1, false);
      this.modelMainImg.splice((index - 1), 1, this.galleryList[index - 1]['image_1'].url);
      this.oblongFlag = false;
    },
    async changeImg(index, n) {
      // モーダルのメイン画像をクリックしたサブ画像に入れ替える処理を入れる
      this.changeImgFlag = true; 
      const item = this.galleryList[index - 1][`image_${n}`];

      await new Promise(resolve => setTimeout(resolve, 500));
      this.ifImgFlag = false;
      this.oblongFlag = item.height < item.width;     
      this.modelMainImg.splice((index - 1), 1, item.url);

      await this.$nextTick();
      this.ifImgFlag = true;
      await new Promise(resolve => setTimeout(resolve, 0));
      this.changeImgFlag = false;

    },
    imgCount(index) {
     const galleryArray = Object.keys(this.galleryList[index - 1]);
     if (!galleryArray.includes('image_2')) return 1;
     if (!galleryArray.includes('image_3')) return 2;
     if (!galleryArray.includes('image_4')) return 3;
     return 4;
    },
    switchViewport() {
       const value =
          window.outerWidth > 360
            ? 'width=device-width,initial-scale=1'
            : 'width=360';
           if (this.viewport !== value) {
             this.$nextTick(() => {
             this.viewport = value;
          })
        }
    }
  },
};
</script>

<style lang="sass" scoped>

@for $i from 1 through 16
  .gallery_picture_#{$i}
    grid-area: area#{$i}

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
      padding: 15px 15px 4%
      @media screen and (min-width: 970px) and (min-height: 800px)
        width: 100%
        max-width: 890px
        padding: 20px 20px 45px
      @media screen and (max-width: 800px)
        font-size: 13px
      @media screen and (max-width: 600px)
        width: 90vw
        max-width: 295px
        padding: 17px 17px 23px
        transform: translate(0, 10px)

    &_cross_wrap
      line-height: 1em
      padding-right: 5px
      width: min-content
      margin-left: auto
      cursor: pointer;

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
        margin-top: 24px

      @media screen and (max-width: 600px)
        font-size: 14px
        margin-top: 5px

    &_grid
      display: grid
      grid-template-areas: 'main sub' 'main text' 
      grid-template-columns: 29.1vw 1fr
      column-gap: 2.4%
      row-gap: 20px
      margin-top: 1.8%
      @media screen and (min-width: 970px)
        grid-template-columns: 300px 1fr
        column-gap: 15px
        row-gap: 30px
        margin-top: 11px

      @media screen and (min-width: 970px) and (min-height: 800px)
        grid-template-columns: 400px 1fr
        column-gap: 20px
        row-gap: 40px
        margin-top: 19px
        
      @media screen and (max-width: 600px)
        display: block
        margin-top: 12px
    
      &.oblong
        grid-template-areas: 'main sub' 'text text'
        grid-template-columns: 42vw 1fr
        column-gap: 2%
        @media screen and (min-width: 970px)
          grid-template-columns: 437px 1fr
          column-gap: 9px

        @media screen and (min-width: 970px) and (min-height: 800px)
          grid-template-columns: 583px 1fr
          column-gap: 12px

        .model_main_img
          height: calc(42vw * 0.56)
          @media screen and (min-width: 970px)
            height: 246px
          
          @media screen and (min-width: 970px) and (min-height: 800px)
            height: 328px

          @media screen and (max-width: 600px)
            height: calc(0.56 * 261px)
            
        
        .model_sub_img_cont
          width: 8.8vw;
          height: 8.8vw;
          margin-bottom: 4%;
          @media screen and (min-width: 970px)
            width: 91.5px
            height: 91.5px
            margin-bottom: 7.5px

          @media screen and (min-width: 970px) and (min-height: 800px)
            width: 122px
            height: 122px
            margin-bottom: 10px

          
          @media screen and (max-width: 600px)
            width: 52px
            height: 52px
            margin-right: 4px
            margin-bottom: 0
          
        
        .model_sub_img
          width: 12vw;
          height: 12vw;
          left: calc((12vw - 8.8vw) / -2);
          top: calc((12vw - 8.8vw) / -2);

          @media screen and (min-width: 970px)
             width: 123px;
             height: 123px;
             left: -15.75px;
             top: -15.75px;

          @media screen and (min-width: 970px) and (min-height: 800px)
            width: 164px;
            height: 164px;
            left: -21px;
            top: -21px;

          @media screen and (max-width: 600px)
            width: 69px
            height: 69px
            left: -8.5px
            top: -8.5px
          
    &_main_img
      grid-area: main
      width: 100%
      height: calc(29.1vw * 1.41)
      object-fit: cover
      @media screen and (min-width: 970px)
        height: 423px
        
      @media screen and (min-width: 970px) and (min-height: 800px)
        height: 564px  

      @media screen and (max-width: 600px)
        height: calc(1.33 * 261px)
        max-height: 367px

    &_sub_img_wrap
      grid-area: sub
      display: flex
      flex-wrap: wrap
      width: 100%
      height: min-content
      @media screen and (max-width: 600px)
        margin-top: 8px
    
    &_sub_img_cont
      position: relative
      width: 12vw
      height: 12vw
      margin-right: 2.5%
      margin-bottom: 3.5%
      overflow: hidden
      cursor: pointer
      &:hover
        opacity: 0.6;
      &:nth-child(2n)
        margin-right: 0
        @media screen and (max-width: 600px)
          margin-right: 4px
          
      @media screen and (min-width: 970px)
        width: 117px
        height: 117px

      @media screen and (min-width: 970px) and (min-height: 800px)
        width: 156px
        height: 156px
        margin-right: 11px
        margin-bottom: 15px

      @media screen and (max-width: 600px)
        width: 52px
        height: 52px
        margin-right: 4px
        margin-bottom: 0

    &_sub_img
      position: absolute
      width: 16.1vw
      height: 16.1vw
      object-fit: cover
      object-position: right 0
      left: calc((16.1vw - 12vw) / -2)
      top: calc((16.1vw - 12vw) / -2)
      @media screen and (min-width: 970px)
        width: 156px
        height: 156px
        left: -19.5px
        top: -19.5px

      @media screen and (min-width: 970px) and (min-height: 800px)
        width: 209px
        height: 209px
        left: -26px
        top: -26px

      @media screen and (max-width: 600px)
        width: 69px
        height: 69px
        left: -8.5px
        top: -8.5px

    &_text_cont
      grid-area: text
      display: flex
      align-items: flex-end
      @media screen and (max-width: 600px)
        margin-top: 22px
      
    &_text
      font-size: 0.8em
      white-space:pre-wrap
      word-wrap:break-word
      @media screen and (min-width: 970px) and (min-height: 800px)
        font-size: 16px
      @media screen and (max-width: 600px)
        font-size: 11px
  
  &_grid
   display: grid
   grid-template-areas: 'area1  area2  area3  area4  ' 'area5  area6  area7  area8  ' 'area9  area10 area11 area12''area13 area14 area15 area16'
   @media screen and (max-width: 600px)
     grid-template-areas: 'area1  area1  area1  area2  area2  area2  ' 'area3  area3  area3  area4  area4  area4  ' 'area5  area5  area6  area6  area7  area7 ' 'area8 area8 area9 area9 area10 area10 ''area11 area11 area12 area12 area13 area13' 'area14 area14 area15 area15 area16 area16'
     

   
  &_picture
    width: 100%
    height: 100%
    &:hover
      opacity: 0.6;
    > .gallery_img
      width: 100%
      height: 100%
      object-fit: cover
      cursor: pointer

</style>