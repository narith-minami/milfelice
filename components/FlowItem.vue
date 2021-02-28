<template lang="pug">
.flow_item
  .flow_item_inner.flex-row.line-height-normal
    .item_left.flex-row
      p.left_caption.mg-auto.price-title-font.sp_title {{ item.step }} {{ item.title }}
      .pc_title.flex-col.mg-auto.text-center.price-title-font.left_caption
        p.text-white {{ item.step }}
        p {{ item.title }}
    .item_right.word-break
      p.top_text.mg-bottom-16 {{ item.mainBody }}
      p.sub_text {{ item.subText }}
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="sass" scoped>
.flow_item
  padding-bottom: 16px
  .flow_item_inner
    max-width: 1000px
    border: 1px solid #F59C9C
    border-radius: 20px
    height: 235px
    .item_left
      min-width: 250px
      padding: 16px
      background-color: #FFD9D9
      border-radius: 20px 0 0 20px
      border-right: 1px solid #F59C9C
      .left_caption
        margin: auto
        font-size: 22px
        &.sp_title
          display: none
        &.pc_title
          display: inline-block
    .item_right
      padding: 30px
      .top_text
        font-size: 20px

  @media (max-width: 600px)
    .flow_item_inner
      height: auto
      margin: 0 20px
      flex-direction: column
      .item_left
        padding: 12px
        min-width: initial
        margin: 20px
        width: fit-content
        border-radius: 10px
        border-right: none
        border: 1px solid #F59C9C
        .left_caption
          margin: auto 0
          font-size: 18px
          &.sp_title
            display: inline-block
          &.pc_title
            display: none
      .item_right
        padding: 0 20px 20px 20px
        .top_text
          font-size: 14px
        .sub_text
          font-size: 12px
</style>