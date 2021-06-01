<template lang="pug">
article.page_container
  section.consult_section
    .consult_top
      .consult_inner
        img(
          :src="require('@/assets/images/consultation/consult.png')",
          alt="予約受付中 ヘア小物相談会"
        )
    .consult_main
      .consult_inner
        .consult_main_content
          p.consult_title
            img(
              :src="require('@/assets/images/consultation/consult_title.svg')",
              alt="What kind of hairstyle?"
            )
          p.consult_subtitle.price-title-font どんな髪型にしようかな？
          p.consult_lead 結婚式のヘアスタイルをお悩みの花嫁様にご好評いただいているヘア小物相談会。
          p.consult_lead 自分にはどんなスタイルが似合うのだろう…
            br
            | 髪飾りはどうしたらいいのかな？？
          p.consult_lead 相談会では、様々な小物を用意し、実際にヘアスタイルを作って色々な髪飾りをお試しいただきながら、イメージを膨らますことができます。
        .consult_main_thumb
          img(
            :src="require('@/assets/images/consultation/hairstyle.jpg')",
            alt=""
          )
    .consult_box
      .consult_inner
        p.consult_box_title.price-title-font ヘア小物相談会
          span ￥6,600
        p.consult_lead 所要時間/1時間30分・完全予約制
        p.consult_lead 海外挙式や会場でのリハーサル前に、ある程度イメージをつけておきたい。
          br
          | そんな花嫁様におすすめの髪型とヘア小物を相談できるサービスです。
          br
          | 一時間半の相談で、スタイル制限なし、お写真も撮っていただけます。
    .consult_btm
      .consult_inner
        p.consult_btn
          a.consult_link.item-center(
            href="https://instagram.com/milfelicewedding",
            target="_blank"
          )
            img.consult_link_insta(
              :src="require('@/assets/images/consultation/instagram.svg')"
            )
            span ヘア小物のスタイリングを<br />Instagramでチェックできます
            img.consult_link_arr(
              :src="require('@/assets/images/consultation/arrow.svg')"
            )
  section#flower_item.flower_section
    .consult_top.flower_top
      .consult_inner
        img(
          :src="require('@/assets/images/consultation/flower.svg')",
          alt="胸キュン フラワーアイテム"
        )
    .flower_content
      .flower_main
        .flower_main_top
          p.flower_title
            img(
              :src="require('@/assets/images/consultation/flower_title.svg')",
              alt="Favorite flower item"
            )
          p.consult_subtitle.price-title-font お気に入りのフラワーアイテム
          p.consult_lead ミルフェリーチェでは衣装に合わせたブーケやリストブーケ
            br
            | ヘアスタイルに合わせた花冠などの髪飾りもご提案させていただきます。
            br
            | どうぞお気軽にお問い合わせください。
        .flower_main_btm
          p.consult_lead お花は全てアーティシャルフラワーになります。
            br
            | 生花の取り扱いはございませんのでご注意ください。
          p.flower_price Price（税込み表示）
          ul.flower_price_list
            li.flower_price_item ・ウエディングブーケ・ブートニアセット … ￥22,000〜
            li.flower_price_item ・花冠 … ￥5,500〜
            li.flower_price_item ・リストブーケ … ￥4,950〜
            li.flower_price_item ・和装髪飾り（コームタイプ） … ￥3,850〜
            li.flower_price_item ・フラワーヘッドパーツ … ￥330〜/1本
      ul.flower_list
        li.flower_item(
          v-for="(flowerItem, index) in flowerItems",
          :key="index"
        )
          img(:src="flowerItem.image.url")
    section.faq
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
  async asyncData(context) {
    const items = await context.app.$getData("flower_items");
    return {
      flowerItems: items,
    };
  },
  head: {
    title: "ヘア小物相談会",
  },
};
</script>

<style lang="sass" scoped>
.faq
  background-color: #FFF7FA
  position: relative
  @media (max-width: 600px)
    padding: 0px 27px
    .banner_faq
      background-color: #FFF7FA
      padding: 80px 0px 118px
      @media (max-width: 1200px)
        width: 83.3%
      @media (max-width: 600px)
        padding: 25.4px 0px 40.5px
        width: auto
      img
        width: 100%

$sp-padding: 16px
img
  max-width: 100%
  vertical-align: bottom
.consult_top
  background-image: url('~@/assets/images/consultation/consult_back.png')
  background-position: center
  background-color: #FFF7FA
  background-repeat: no-repeat
  height: 340px
  width: 100vw
  display: flex
  align-items: center
  &.flower_top
    background-image: url('~@/assets/images/consultation/flower_back.jpg')
  img
    max-width: 400px
.consult_inner
  max-width: 1240px
  width: 100%
  padding: 0 20px
  margin: 0 auto
.consult_subtitle
  margin: 0 0 60px
  color: #F59C9C
  font-size: 18px
  text-align: center
.consult
  &_main
    padding: 160px 0 60px
    .consult_inner
      position: relative
      padding-top: 30px
    &_content
      max-width: 55%
    &_thumb
      position: absolute
      top: 0
      right: 0
      max-width: 40%
  &_title
    padding-right: 40px
    margin-bottom: 25px
    text-align: center
  &_lead
    line-height: 1.8
    & + .consult_lead
      margin-top: 30px
  &_box
    padding: 40px 0
    background-color: #FFF7FA
    &_title
      display: flex
      justify-content: space-between
      max-width: 540px
      margin-bottom: 20px
      border-bottom: 1px solid #F59C9C
      font-size: 28px
      span
        font-size: 32px
        font-weight: bold
    .consult_lead
      font-size: 14px
  &_btm
    padding: 20px 0 80px
  &_btn
    max-width: 480px
    margin-left: auto
  &_link
    padding: 5px 20px
    border: 1px solid #EF6092
    border-radius: 10px
    font-size: 14px
    &:hover
      opacity: 0.8
    span
      margin: 0 60px 0 20px
      line-height: 1.6
.flower
  &_content
    max-width: 1280px
    width: 100%
    padding: 80px 20px
    margin: 0 auto
  &_main
    display: flex
    justify-content: space-between
    max-width: 1200px
    margin: 0 auto
    &_top
      flex: 0 0 55%
    &_btm
      flex: 0 1 40%
      padding-top: 40px
  &_title
    padding-right: 40px
    margin-bottom: 25px
    text-align: center
  &_price
    padding-top: 20px
    margin: 20px 0 10px
    border-top: 1px solid #F59C9C
    color: #F59C9C
    font-weight: bold
    &_list
      line-height: 2.0
      list-style-type: none
    &_item
      padding-left: 1em
      text-indent: -1em
  &_list
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
    margin-top: 50px
    list-style-type: none

*,
*::before,
*::after
  box-sizing: border-box
@media screen and (max-width: 767px)
  .consult_top
    height: 48vw
    background-image: url('~@/assets/images/consultation/consult_back_sp.png')
    background-size: cover
    &.flower_top
      width: calc(100vw - 32px)
      height: 38vw
      background-image: url('~@/assets/images/consultation/flower_back_sp.jpg')
      background-color: #FFF
      background-size: contain
    img
      max-width: 55%
  .consult_inner
    padding: 0 $sp-padding
  .consult_subtitle
    margin: 0 0 20px
    font-size: 10px
  .consult
    &_main
      padding: 20px 0 0
      .consult_inner
        padding-top: 0
      &_content
        max-width: 100%
        margin-bottom: 45px
      &_thumb
        position: static
        max-width: calc(100% + #{$sp-padding} * 2)
        margin: 0 -$sp-padding
        text-align: center
    &_title
      padding-right: 15px
      margin-bottom: 10px
    &_lead
      font-size: 12px
      & + .consult_lead
        margin-top: 20px
    &_box
      position: relative
      padding: 10px 0
      margin: -50px $sp-padding 0
      &_title
        max-width: 100%
        font-size: 24px
        span
          font-size: 24px
      .consult_lead
        font-size: 12px
    &_btm
      padding: 10px 0 20px
    &_btn
      max-width: 220px
    &_link
      padding: 8px 5px
      font-size: 8px
      span
        margin: 0 10px
      &_insta
        max-width: 30px
      &_arr
        max-width: 4px
  .flower
    &_section
      padding: 0 $sp-padding
    &_content
      padding: 20px 0 40px
    &_main
      flex-direction: column
      padding: 0 6px
      &_top
        flex: 0 0 100%
      &_btm
        flex: 0 1 100%
    &_title
      padding-right: 15px
      margin-bottom: 10px
    &_price
      font-size: 12px
      &_list
        font-size: 12px
    &_list
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
      margin-top: 40px
</style>
