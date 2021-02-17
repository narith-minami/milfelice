<template lang="pug">
.sub_price_section
  .main_plan.flex-col
    .header_wrap.flex-row.space-bw.price-title-font 
      .left_caption.flex-row
        span.mg-right-20 {{ plan.plan }}
    .detail_wrap.flex-row.space-bw.mg-bottom-16
      //- Left Side
      .left_item
        .flex-row
          .color_label.flex-row 
            span.mg-auto.text-size-m 平日
          .price_bold.price-amount-font {{ plan.price_1 }}
      //- Right Side
      .right_item
        .flex-row
          .color_label.flex-row 
            span.mg-auto.text-size-m 土日祝日
          .price_bold.price-amount-font {{ plan.price_2 }}

    //- 説明        
    .flex-row
      .option_wrap.flex-col.word-break.text-size-m {{ plan.caption_1 }}
</template>

<script>
export default {
  props: {
    plan: Object,
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
    .option_wrap
      line-height: 30px
    .header_wrap
      border-bottom: 1px solid #F59C9C
      margin-bottom: 24px
      .left_caption
        font-size: 28px
      .right_caption
        align-items: flex-end
        margin-bottom: 6px
    .detail_wrap
      .price_bold
        font-size: 32px
        font-weight: bold
        margin-left: 8px
      .color_label
        margin: auto 0
        width: 56px
        height: 30px
        border-radius: 8px
        border: 1px solid #C7B9DB
        background-color: #F8F4FF
</style>