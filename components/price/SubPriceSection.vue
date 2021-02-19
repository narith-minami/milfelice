<template lang="pug">
.sub_price_section
  .main_plan.flex-col
    .header_wrap.flex-row.space-bw.price-title-font
      .left_caption.flex-row
        span.mg-right-20 {{ plan.plan }}
      .right_caption.flex-row
        span サポート / {{ plan.support_time }}
    .detail_wrap.flex-row.space-bw.mg-bottom-16
      //- Left Side
      .left_item
        .flex-row
          .color_label.pink.flex-row 
            span.mg-auto 洋装
          .price_bold.price-amount-font {{ plan.price_1 }}
        .flex-row.padding-top-16
          .option_wrap.flex-col.word-break.text-size-m {{ plan.caption_1 }}
      //- Right Side
      .right_item
        .flex-row
          .color_label.blue.flex-row 
            span.mg-auto 和装
          .price_bold.price-amount-font {{ plan.price_2 }}
        .flex-row.padding-top-16
          .option_wrap.flex-col.word-break.text-size-m {{ plan.caption_2 }}
            .benefits.padding-top-12.flex-col.text-size-m(v-if="showKastura")
              span かつらは別途料金になります。
              span
                a.text-underline(href="#option_katsura") かつらオプション詳細
</template>

<script>
export default {
  props: {
    plan: Object,
    showKastura: Boolean,
  },
};
</script>
<style lang="sass" scoped>
.sub_price_section
  .description_panel
    border: 1px solid #F59C9C
    background-color: #FFF7FA
    border-radius: 10px
    padding: 20px
  .main_plan
    margin-bottom: 80px
    .header_wrap
      border-bottom: 1px solid #F59C9C
      margin-bottom: 18px
      .left_caption
        font-size: 28px
      .right_caption
        align-items: flex-end
        margin-bottom: 6px
    .detail_wrap
      .option_wrap
        line-height: 30px
      .price_bold
        font-size: 32px
        font-weight: bold
        margin-left: 8px
      .color_label
        margin: auto 0
        width: 56px
        height: 30px
        border-radius: 8px
        &.blue
          background-color: #B7E3F0
        &.pink
          background-color: #F0B7BF
</style>