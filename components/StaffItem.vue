<template lang="pug">
.staff_item
  .staff_item_inner.flex-row
    .item_left.flex-row
      img.staff_image(:src="item.image.url" witdh="286px")
    .item_right
      .flex-col
        .staff_name_wrap
          .flex-row
            p.top_text {{ item.name }}
            p.sub_text {{ item.kana }}
          .flex-row {{ item.job }}
        .staff_comment_wrap.word-break.line-height-normal {{ item.comment }}
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="sass" scoped>
.staff_item
  padding-bottom: 16px
  .staff_item_inner
    max-width: 1000px
    .item_left
      padding: 16px
      .staff_image
        margin-top: 6px
        width: 286px
        height: 286px
    .item_right
      padding: 16px
      .staff_name_wrap
        border-bottom: 1px solid #F59C9C
      .staff_comment_wrap
        padding-top: 16px
      .top_text
        font-size: 24px
        margin-bottom: 8px
      .sub_text
        padding-top: 10px
        padding-left: 12px
</style>