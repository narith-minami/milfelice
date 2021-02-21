<template lang="pug">
.flow_item
  .flow_item_inner.flex-row.line-height-normal
    .item_left.flex-row
      p.left_caption.mg-auto.price-title-font {{ item.title }}
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
    .item_right
      padding: 30px
      .top_text
        font-size: 20px
</style>