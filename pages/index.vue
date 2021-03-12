<template lang="pug">
article.top_content
  //- first view
  section.first_view
    Slider(:slideImages ="slideImages" :thumbnails ="thumbnails")
  //- top detail
  section.detail
    img.flower1(:src="require('@/assets/images/top/flower1.png')" alt="")
    .detail_flex.default_content
      .text_box.is_sp
        p.detail_text Milfelice（ミルフェリーチェ）は、出張ヘアメイクを中心に活躍する、フリーランスヘアメイクアーティストの集まりです。<br>「人」と「人」としての関係を一番に考え、フリーランスであることのメリットを生かし、式場のような固い考えに囚われない自由なウェディングを提供させていただきます。
      img.top_img(:src="require('@/assets/images/top/top_img.png')" alt="")
      .text_box.is_pc
        p.detail_text Milfelice（ミルフェリーチェ）は、出張ヘアメイクを中心に活躍する、フリーランスヘアメイクアーティストの集まりです。<br>「人」と「人」としての関係を一番に考え、フリーランスであることのメリットを生かし、式場のような固い考えに囚われない自由なウェディングを提供させていただきます。<br><br>女性の美しさを最大限に引き出し、かけがえのない「特別な一日」を演出するお手伝いをさせていただいております。<br><br>Milfeliceという名前には、ご依頼いただいたすべてのお客様や出会ったすべての花嫁に、たくさんの幸せが訪れることを願い　Mill = 重なる　Felice = 幸せ　という意味が込められています。
      .text_box.is_sp
        p.detail_text 女性の美しさを最大限に引き出し、かけがえのない「特別な一日」を演出するお手伝いをさせていただいております。<br><br>Milfeliceという名前には、ご依頼いただいたすべてのお客様や出会ったすべての花嫁に、たくさんの幸せが訪れることを願い　Mill = 重なる　Felice = 幸せ　という意味が込められています。
    img.top_copy(:src="require('@/assets/images/top/top_copy.svg')" alt="1番素敵な日になりますように")
    .top_detail-text.default_content
      .text_content1
        picture
          source.faq_banner.sp_image(:srcset="require('@/assets/images/top/text_cover-sp1.svg')" media="(max-width: 600px)")
          img.faq_banner(:src="require('@/assets/images/top/text_cover1.svg')")
      .text_content2
        picture
          source.faq_banner.sp_image(:srcset="require('@/assets/images/top/text_cover-sp2.svg')" media="(max-width: 600px)")
          img.faq_banner(:src="require('@/assets/images/top/text_cover2.svg')")
  //- banners
  section.top_banners
    BannerPrice
    BannerItems

  //- style gallery
  section.gallery
    img.flower2(:src="require('@/assets/images/top/flower2.png')" alt="")
    .gallery_top_content.default_content
      img.gallery_title(:src="require('@/assets/images/top/gallery_title.svg')" alt="")
      a.insta_button.is-pc(href="https://instagram.com/milfelicewedding" target="_blank") ミルフェリーチェのスタイルを<br>インスタグラムでもチェック！
    TopGallery(:galleryItems ="galleryItems")
    .gallery_top_content.default_content.is-sp
      a.insta_button(href="https://instagram.com/milfelicewedding" target="_blank") ミルフェリーチェのスタイルを<br>インスタグラムでもチェック！

  //- customers voice
  section.voice
    .voice_top_content.default_content
      img.voice_title(:src="require('@/assets/images/top/voice_title.svg')" alt="")
    VoiceItems(:voice-list="voice" @goVoicePage="goVoicePage")
  //- faq
  section.faq
    img.flower3(:src="require('@/assets/images/top/flower3.png')" alt="")
    BannerFAQ
</template>

<script>
import BannerItems from "~/components/BannerItems.vue";
import BannerPrice from "~/components/BannerPrice.vue";
import BannerFAQ from "~/components/BannerFAQ.vue";
import Slider from "~/components/Slider.vue";
import VoiceItems from "~/components/VoiceItems.vue";
import TopGallery from "~/components/TopGallery.vue";

export default {
  components: {
    BannerItems,
    BannerPrice,
    BannerFAQ,
    Slider,
    VoiceItems,
    TopGallery,
  },
  async asyncData(context) {
    const slideImages = await context.app.$getData("top_slide");
    const thumbnails = await context.app.$getData("top_thumbnails");
    const galleryItems = await context.app.$getData("gallery");
    const voiceItems = await context.app.$getData("voice");
    return { voice: voiceItems ,thumbnails: thumbnails, galleryItems: galleryItems ,slideImages: slideImages};
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    goVoicePage(id){
      window.location.href ="/voice/?id="+id
    },
  }
};
</script>

<style lang="sass" scoped>
.top_content
  margin-top: 100px;
  overflow: hidden;
  @media (max-width: 600px)
    margin-top: 54.94px
  .default_content
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 1220px)
      width: 83.3%
    @media (max-width: 600px)
      width: 100%
  .first_view
    width: 100%;
    z-index: 2;
  .detail
    background-color: #FFF7FA;
    padding: 121px 0px 40px;
    position: relative;
    z-index: 3;
    @media (max-width: 600px)
      padding: 40px 0px 23.1px;
    .flower1
      position: absolute;
      top: -46px;
      left: calc(50% - 586px);
      transform: translateX(-50%);
      @media (max-width: 1220px)
        left: 0px;
        top: 4px;
        transform: inherit;
        width: 14.7%
      @media (max-width: 600px)
        display: none
    .detail_flex
      display: flex;
      margin-bottom: 66.9px;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1200px)
        display: block
        margin: 0 auto 40px;
      .is_pc
        display: block;
        @media (max-width: 1200px)
          display: none;
      .is_sp
        display: none;
        @media (max-width: 1200px)
          display: block;
      .text_box
        max-width: 589.88px;
        @media (max-width: 1200px)
          margin: 0 auto;
          padding: 0px 15px;
        p
          color: #3A3A3A;
          font-size: 16px;
          line-height: 1.8
          @media (max-width: 600px)
            font-size: 14px
      .top_img
        max-width: 589px;
        max-height: 333px;
        @media (max-width: 1200px)
          margin: 28px auto 40px;
          display: block;
          width: 100%;
    .top_copy
      margin: 0 auto 38px;
      display: block;
      max-width: 565.7px;
      width: 80%;
    .top_detail-text
      display: flex;
      justify-content: space-between;
      @media (max-width: 1222px)
        display: block;
      @media (max-width: 600px)
        width: 91.73%;
      .text_content1,.text_content2
        width: 592px;
        picture
          display: flex;
        img
          width: 100%
          background-color: #ffffff;
        @media (max-width: 1222px)
          margin: 0 auto;
        @media (max-width: 720px)
          width: 100%;
        @media (max-width: 580px)
          width: 100%;
        @media (max-width: 500px)
          width: 100%;
      .text_content1
        @media (max-width: 1222px)
          margin: 0 auto 21.8px;

  .top_banners
    z-index: 1;
    padding: 40px 0px 39px;
    max-width: 1220px;
    margin: 0 auto;
    width: 83.3%;
    @media (max-width: 600px)
      padding: 47.6px 18px 40px;
      width: auto
    .banner_faq
      background-color: #ffffff;
      padding: 0px 0px 20px
      margin-bottom: 0px;
      @media (max-width: 600px)
        margin-bottom: 0px;
        padding: 0px 0px 26.9px 0px
      .banner_inner
        padding: 0px
  .banner_items
    padding: 0px;
  .gallery
    padding: 81.8px 0px 40px;
    background-color: #FFF7FA;
    position: relative;
    @media (max-width: 600px)
      padding: 8.2px 15px 20px;
    .gallery_title
      max-width: 561.25px;
      @media (max-width: 1439px)
        width: 38.975vw;
      @media (max-width: 600px)
        width: 193px;
    .flower2
      position: absolute;
      right: -110px;
      transform: translateX(-50%);
      top: -60px;
      @media (min-width: 1440px)
        right: calc(50% - 836px);
      @media (max-width: 700px)
        width: 110px
        transform: inherit;
        right: -2px
    .gallery_top_content
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .insta_button
        padding: 19px 139px 17px 134px;
        border: 1px solid #EF6092;
        border-radius: 10px;
        display: block;
        background-color: #ffffff;
        position: relative;
        font-size: 14px;
        color: #3A3A3A;
        letter-spacing: 0.03rem;
        cursor: pointer;
        @media (max-width: 1079px)
          padding: 19px 55px 17px 102px;
        &:hover
          opacity: 0.6;
        &:after
          content: '';
          background-image: url(~@/assets/images/top/insta_icon.svg);
          background-size: cover;
          width: 70px;
          height: 70px;
          display: block;
          left: 59px;
          top: 5px;
          position: absolute;
          @media (max-width: 1079px)
            left: 5%
        &:before
          content: '';
          background-image: url(~@/assets/images/top/button_arrow.svg);
          background-size: cover;
          width: 7px;
          height: 12px;
          display: block;
          right: 68.4px;
          top: 34.5px;
          position: absolute;
          @media (max-width: 1079px)
            right: 7%
      .is-pc
        display: block;
        @media (max-width: 824px)
          display: none;
    .is-sp
      display: none;
      @media (max-width: 824px)
        display: block;
        height: 52px
        margin-top: 18px
        .insta_button
          padding: 10px 23.8px 10px 42.2px;
          font-size: 8px
          width: 150px
          float: right;
          border: 1px solid #EF6092;
          &:after
            width: 30px
            height: 30px
            top: 10px
            left: 10px
          &:before
            top: 20.5px
            right: 8.6px
  .voice
    padding: 70.7px 0px 80px;
    @media (max-width: 600px)
      padding: 20px 15px 81px;
    .voice_title
      width: 49.34vw
      max-width: 710.56px
      min-width: 255px;
    .voice_top_content
      margin-bottom: 25.9px;
      @media (max-width: 600px)
        margin-bottom: 24px;
        width: 100%
  .faq
    background-color: #FFF7FA;
    position: relative;
    @media (max-width: 600px)
      padding: 0px 27px
    .banner_faq
      background-color: #FFF7FA;
      padding: 80px 0px 118px;
      @media (max-width: 1200px)
        width: 83.3%;
      @media (max-width: 600px)
        padding: 25.4px 0px 40.5px;
        width: auto;
      img
        width: 100%
    .flower3
      position: absolute;
      left: calc(50% - 614px);
      transform: translateX(-50%);
      top: -84px;
      z-index: 2;
      @media (max-width: 600px)
        left: -45px
        transform: inherit;
        width: 178px
</style>
