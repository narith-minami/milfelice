<template lang="pug">
  article.page_container
    section.consult_section
      .consult_top
        .consult_inner
          img(:src="require('@/assets/images/consultation/consult.svg')" alt="予約受付中 ヘア小物相談会")
      .consult_main
        .consult_inner
          .consult_main_content
            p.consult_title
              img(:src="require('@/assets/images/consultation/consult_title.svg')" alt="What kind of hairstyle?")
            p.consult_subtitle.price-title-font どんな髪型にしようかな？
            p.consult_lead 結婚式のヘアスタイルをお悩みの花嫁様にご好評いただいているヘア小物相談会。
            p.consult_lead 自分にはどんなスタイルが似合うのだろう…
              br
              | 髪飾りはどうしたらいいのかな？？
            p.consult_lead 相談会では、様々な小物を用意し、実際にヘアスタイルを作って色々な髪飾りをお試しいただきながら、イメージを膨らますことができます。
          .consult_main_thumb
            img(:src="require('@/assets/images/consultation/hairstyle.jpg')" alt="")
      .consult_box
        .consult_inner
          p.consult_box_title.price-title-font ヘア小物相談会
            span ￥6,000
          p.consult_lead 所要時間/1時間30分・完全予約制
          p.consult_lead 海外挙式や会場でのリハーサル前に、ある程度イメージをつけておきたい。
            br
            | そんな花嫁様におすすめの髪型とヘア小物を相談できるサービスです。
            br
            | 一時間半の相談で、スタイル制限なし、お写真も撮っていただけます。
      .consult_btm
        .consult_inner
          p.consult_btn
            a.consult_link.item-center(href="https://instagram.com/milfelicewedding" target="_blank")
              img(:src="require('@/assets/images/consultation/instagram.svg')")
              <span>ヘア小物のスタイリングを<br />Instagramでチェックできます</span>
              img(:src="require('@/assets/images/consultation/arrow.svg')")
    section.flower_section#flower_item
      .consult_top.flower_top
        .consult_inner
          img(:src="require('@/assets/images/consultation/flower.svg')" alt="胸キュン フラワーアイテム")
      .flower_content
        p.flower_title
          img(:src="require('@/assets/images/consultation/flower_title.svg')" alt="Favorite flower item")
        p.consult_subtitle.price-title-font お気に入りのフラワーアイテム
        ul.flower_list
          li.flower_item(v-for="index in 6" :key="index")
            img(:src="require('@/assets/images/consultation/flower_' + index + '.jpg')")
    BannerFAQ
  </article>
</template>

<script>
import BannerFAQ from "~/components/BannerFAQ.vue";

export default {
  layout: "page",
  components: {
    BannerFAQ,
  },
};
</script>

<style lang="sass" scoped>
img
  max-width: 100%;
.consult_top
  background-image: url('~@/assets/images/consultation/consult_back.jpg');
  background-position: center;
  background-color: #FFF7FA;
  background-repeat: no-repeat;
  height: 340px;
  width: 100vw;
  display: flex
  align-items: center;
  &.flower_top
    background-image: url('~@/assets/images/consultation/flower_back.jpg');
  img
    max-width: 400px;
.consult_inner
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
.consult_subtitle
  margin: 0 0 60px;
  color: #F59C9C;
  font-size: 18px;
  text-align: center
.consult
  &_main
    padding: 160px 0 60px;
    .consult_inner
      position: relative;
      padding-top: 30px
    &_content
      max-width: 55%;
    &_thumb
      position: absolute;
      top: 0;
      right: 0;
      max-width: 40%;
  &_title
    padding-right: 40px;
    margin-bottom: 25px;
    text-align: center;
  &_lead
    line-height: 1.8;
    & + .consult_lead
      margin-top: 30px
  &_box
    padding: 40px 0;
    background-color: #FFF7FA;
    &_title
      display: flex;
      justify-content: space-between;
      max-width: 540px;
      margin-bottom: 20px
      border-bottom: 1px solid #F59C9C;
      font-size: 28px;
      span
        font-size: 32px;
        font-weight: bold;
    .consult_lead
      font-size: 14px;
  &_btm
    padding: 20px 0 80px;
  &_btn
    max-width: 480px;
    margin-left: auto;
  &_link
    padding: 5px 20px;
    border: 1px solid #EF6092;
    border-radius: 10px;
    font-size: 14px;
    &:hover
      opacity: 0.8;
    span
      margin: 0 60px 0 20px;
      line-height: 1.6;
.flower
  &_content
    max-width: 1240px;
    width: 100%;
    padding: 80px 0;
    margin: 0 auto;
  &_title
    padding-right: 40px;
    margin-bottom: 25px;
    text-align: center;
  &_list
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 15px;
    list-style-type: none;
</style>
