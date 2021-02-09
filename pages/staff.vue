<template lang="pug">
article.page_container
  PageTop(title="Stuffs", caption="スタッフ")
  .page_description_wrap.flex-row
    .mg-auto
      p フリーのヘアメイクアーティストがお二人の特別な1日をお手伝いいたします。
      p 花嫁様の気持ちに寄り添えるよう精一杯サポートさせていただきますので
        br
        | どんなことでもお気軽にご相談くださいませ。
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
      p.header_caption.text-center Partner
      .text-center 提携パートナー
      .partner_sub_caption.text-center ミルフェリーチェがおすすめする素晴らしい技術とアットホームなお人柄のカメラマンさんたちです。
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
};
</script>

<style lang="sass" scoped>
.back_image_1
  position: absolute
  right: 0

.back_image_2
  position: relative
  top: -50px
  height: 0

.back_image_3
  position: relative
  right: 40px
  bottom: 550px
  text-align: right
  height: 0

.staff_section
  width: 1000px
  margin-right: auto
  margin-left: auto
  margin-top: 80px
  margin-bottom: 40px

.partner_section
  background-color: #FFF7FA
  padding-top: 40px
  .header_caption
    margin-bottom: 32px
    font-size: 40px
  .partner_sub_caption
    padding: 30px
    margin-bottom: 60px
  .parter_list
    max-width: 1000px
</style>