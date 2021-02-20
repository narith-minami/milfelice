<template lang="pug">
article.top_content
  //- first view
  section.first_view
    Slider
  //- top detail
  section.detail
    img.flower1(:src="require('@/assets/images/top/flower1.png')" alt="")
    .detail_flex.default_content
      img.top_img(:src="require('@/assets/images/top/top_img.png')" alt="")
      .text_box
        p.detail_text Milfelice（ミルフェリーチェ）は、出張ヘアメイクを中心に活躍する、フリーランスヘアメイクアーティストの集まりです。<br>人」と「人」としての関係を一番に考え、フリーランスであることのメリットを生かし、式場のような固い考えに囚われない自由なウェディングを提供させていただきます。<br><br>女性の美しさを最大限に引き出し、かけがえのない「特別な一日」を演出するお手伝いをさせていただいております。<br><br>Milfeliceという名前には、ご依頼いただいたすべてのお客様や出会ったすべての花嫁に、たくさんの幸せが訪れることを願い　Mill = 重なる　Felice = 幸せ　という意味が込められています。
    img.top_copy(:src="require('@/assets/images/top/top_copy.svg')" alt="1番素敵な日になりますように")
    .top_detail-text.default_content
      .text_content
        p.text_bold 自分に似合う髪形がわからない
        p.text_normal ヘアスタイルは花嫁にとって一番重要です。<br>輪郭やヘアカラーの色により、似合う髪形はそれぞれ。Milfeliceからお好みに合わせて、様々なヘアスタイルを提案させていただきます。美容師の視点から、髪の悩みや普段のお手入れなどもアドバイスできたらと思います。
      .text_content
        p.text_bold いつもよりきれい、素肌に近いナチュラルメイク
        p.text_normal Milfeliceでは素肌に近いナチュラルメイクを心掛けています。<br>作りこんだメイクよりも普段の私よりもちょっときれい♪を目指し10年先も20年先もアルバムを開いたときに「美しい」と感じられるヘアメイクになるようお手伝いさせていただきます。
  //- banners
  section.banners
    BannerPrice
    BannerItems

  //- style gallery
  section.gallery
    img.flower2(:src="require('@/assets/images/top/flower2.png')" alt="")
    .gallery_top_content.default_content
      img.gallery_title(:src="require('@/assets/images/top/gallery_title.svg')" alt="")
      a.insta_button(href="https://instagram.com/milfelicewedding" target="_blank") ミルフェリーチェのスタイルを<br>インスタグラムでもチェック！
    TopGallery

  //- customers voice
  section.voice
    .voice_top_content.default_content
      img.gallery_title(:src="require('@/assets/images/top/voice_title.svg')" alt="")
    VoiceItems
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
};
</script>

<style lang="sass" scoped>
.top_content
  margin-top: 100px;
  .default_content
    max-width: 1200px;
    margin: 0 auto;
  .first_view
    width: 100%;
    z-index: 2;
  .detail
    background-color: #FFF7FA;
    padding: 121px 0px 40px;
    position: relative;
    z-index: 3;
    .flower1
      position: absolute;
      top: -60px;
      left: 2%;
    .detail_flex
      display: flex;
      margin-bottom: 66.9px;
      justify-content: space-between;
      align-items: center;
      .text_box
        max-width: 589.88px;
        p
          color: #3A3A3A;
          font-size: 16px;
          line-height: 1.8
      .top_img
        max-width: 589px;
        width: 40.09vw;
        height: 22.665vw;
    .top_copy
      margin: 0 auto 38px;
      display: block;
    .top_detail-text
      display: flex;
      justify-content: space-between;
      .text_content
        width: 589px;
        height: 269px;
        background-color: #ffffff;
        background-image: url(~@/assets/images/top/text_cover.svg);
        background-size: cover;
        p
          padding-left: 55px;
          width: 478px;
        .text_bold
          width: 501px;
          font-size: 22px;
          font-weight: bold;
          padding: 47px 0px 27px 55px;
          color: #575656;
        .text_normal
          color: #3A3A3A;
          font-size: 16px;
  .banners
    z-index: 1;
    padding: 40px 0px 39px;
    .banner_faq
      background-color: #ffffff;
      padding: 0px 0px 20px
    .banner_items
      padding: 0px;
  .gallery
    padding: 81.8px 0px 40px;
    background-color: #FFF7FA;
    position: relative;
    .flower2
      position: absolute;
      right: 0px;
      top: -60px;
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
        &:hover
          opacity: 0.6;
        &:after
          content: '';
          background-image: url(~@/assets/images/top/insta_icon.svg);
          width: 70px;
          height: 70px;
          display: block;
          left: 59px;
          top: 5px;
          position: absolute;
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
  .voice
    padding: 70.7px 0px 80px;
    .voice_top_content
      margin-bottom: 25.9px;
  .faq
    background-color: #FFF7FA;
    position: relative;
    .banner_faq
      padding: 80px 0px 118px;
    .flower3
      position: absolute;
      left: -50px;
      top: -80px;
      z-index: 2;
</style>
