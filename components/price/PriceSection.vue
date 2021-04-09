<template lang="pug">
.price_section
  .main_plan.flex-col
    .header_wrap.flex-row.space-bw.price-title-font
      .left_caption.flex-row
        span.mg-right-20 挙式〜披露宴
        span 1日サポートプラン
      .right_caption.flex-row
        span サポート / {{ plan.support_time }}
    .detail_wrap.flex-row.space-bw.mg-bottom-30
      //- Left Side
      .left_item
        .flex-row
          img.img_label(:src="require('@/assets/images/price/label_yoso_waso.svg')")
          .price_bold.price-amount-font  {{ plan.price_1 }}
        .flex-row.padding-top-16
          .option_wrap.flex-col.word-break.text-size-m {{ plan.caption_1 }}
      //- Right Side
      .right_item
        .flex-row
          img.img_label(:src="require('@/assets/images/price/label_yoso.svg')")
          .price_bold.price-amount-font  {{ plan.price_2 }}         
        .flex-row.padding-top-16
          .option_wrap.flex-col.word-break.text-size-m {{ plan.caption_2 }}
            .benefits.padding-top-12
              span
              | ＜プラン特典＞
              | 挙式3ヶ月以上前にお申し込みのお客様に限り ¥10,000 OFF           
    .description_panel.text-size-m.word-break {{ plan.remark }}
</template>

<script>
export default {
  props: {
    plan: Object
  }
}
</script>
<style lang="sass" scoped>
.price_section
  .description_panel
    border: 1px solid #F59C9C
    background-color: #FFF7FA
    border-radius: 10px
    padding: 20px
    line-height: 24px
    display: relative
  .main_plan
    margin-bottom: 80px
    .header_wrap
      border-bottom: 1px solid #F59C9C
      margin-bottom: 18px
      .left_caption
        font-size: 32px
      .right_caption
        align-items: flex-end
        margin-bottom: 6px
    .detail_wrap
      .option_wrap
        line-height: 30px
      .price_bold
        font-size: 44px
        font-weight: bold
        margin-left: 16px
      .color_label
        width: 145px
        height: 44px
        border-radius: 8px
        &.pink
          background-color: #F0B7BF
  @media screen and (max-width: 1100px)
    .main_plan
      .left_caption
        flex-direction: column
      .detail_wrap
        flex-direction: column

  @media screen and (max-width: 600px)
    .main_plan
      .header_wrap
        .left_caption
          flex-direction: column
          font-size: 24px
        .right_caption
          font-size: 12px
      .detail_wrap
        flex-direction: column
        .price_bold
          font-size: 24px
        .img_label
          width: 88px
        .left_item
          margin-bottom: 30px
      .description_panel
        font-size: 12px
</style>