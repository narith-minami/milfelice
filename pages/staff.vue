<template lang="pug">
article.page_container
  PageTop(name="staff", caption="スタッフ紹介")
  .page_description_wrap.flex-row.align-center
    .page_description_inner.line-height-normal
      p.page_caption_main.text-size-xxl.mg-bottom-24 フリーのヘアメイクアーティストがお二人の特別な1日をお手伝いいたします。
      p.page_caption_sub.pc_caption 花嫁様の気持ちに寄り添えるよう精一杯サポートさせていただきますので、
        br
        | どんなことでもお気軽にご相談くださいませ。
      p.page_caption_sub.sp_caption 花嫁様の気持ちに寄り添えるよう精一杯サポートさせていただきますので、どんなことでもお気軽にご相談くださいませ。
  //- 装飾
  .back_image_1
    img(:src="require('@/assets/images/flower_1.svg')")
  //- スタッフ
  section.staff_section
    StaffItem(v-for="(item, index) in staff", :key="index", :item="item")
  //- 装飾
  .back_image_2
    img(:src="require('@/assets/images/flower_2.svg')")
  //- パートナー
  section.partner_section.width-100vw
    .partner_section_inner.main-width.margin-side
      p.header_caption.text-center
        img.label_partner(
          :src="require('@/assets/images/partners/label_partner.svg')"
        )
      .label_partner_sub.text-center.mg-bottom-40 提携パートナー
      .partner_sub_caption.flex-row
        .line-height-normal.mg-auto ミルフェリーチェがおすすめする素晴らしい技術とアットホームなお人柄のカメラマンさんたちです。
          br
          | 是非一度HPを覗いてみてくださいね。
      .parter_list.flex-row.flex-wrap
        PartnerItem(
          v-for="(item, index) in partners",
          :key="index",
          :item="item"
        )
  //- 装飾
  .back_image_3
    img(:src="require('@/assets/images/flower_3.svg')")
  //- バナー
  BannerItems
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
import StaffItem from "~/components/StaffItem.vue";
import PartnerItem from "~/components/PartnerItem.vue";
import BannerItems from "~/components/BannerItems.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    StaffItem,
    PartnerItem,
    BannerItems,
  },
  async asyncData(context) {
    const staff = await context.app.$getData("staff");
    const partners = await context.app.$getData("partner");
    return { staff: staff, partners: partners };
  },
  head: {
    title: 'スタッフ'
  },
};
</script>

<style lang="sass" scoped>
.page_description_wrap
  .pc_caption
    display: block
  .sp_caption
    display: none
  @media screen and (max-width: 600px)
    height: 200px
    .pc_caption
      display: none
    .sp_caption
      display: block
    .page_description_inner
      width: 100%
      padding: 0 20px
      .page_caption_main
        font-size: 16px
        margin-bottom: 16px
      .page_caption_sub
        font-size: 12px
        line-height: 20px

.back_image_1
  position: absolute
  z-index: -1
  right: 0
  @media screen and (max-width: 600px)
    img
      width: 130px

.back_image_2
  position: relative
  top: -50px
  height: 0
  @media screen and (max-width: 600px)
    display: none

.back_image_3
  position: relative
  right: 40px
  bottom: 550px
  text-align: right
  height: 0
  @media screen and (max-width: 600px)
    display: none

.staff_section
  width: 1000px
  margin-right: auto
  margin-left: auto
  margin-top: 80px
  margin-bottom: 40px
  @media screen and (max-width: 1000px)
    width: auto

  @media screen and (max-width: 600px)
    width: 100%
    margin-top: 20px

.partner_section
  background-color: #FFF7FA
  padding-top: 80px
  .header_caption
    margin-bottom: 32px
    font-size: 70px
    color: #F59C9C
  .partner_sub_caption
    padding: 30px
    margin-bottom: 60px
  .parter_list
    max-width: 1000px

  @media screen and (max-width: 600px)
    .partner_sub_caption
      font-size: 12px
    .partner_section_inner
      .header_caption
        margin-bottom: 12px
        font-size: inherit
        .label_partner
          width: 120px
      .label_partner_sub
        margin-bottom: 20px
        font-size: 12px
    .parter_list
      padding: 0 20px
</style>