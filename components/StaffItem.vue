<template lang="pug">
.staff_item
  .staff_item_inner.flex-row
    .item_left.flex-row
      img.left_caption(:src="require('@/assets/images/' + item.image_name)")
    .item_right
      .flex-col
        .staff_name_wrap
          .flex-row
            p.top_text {{ item.name }}
            p.sub_text {{ item.kana }}
          .flex-row {{ item.job }}
        .staff_comment_wrap.word-break {{ item.comment }}
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
      .left_caption
        margin: auto
        font-size: 22px
    .item_right
      padding: 16px
      .staff_name_wrap
        border-bottom: 1px solid #F59C9C
      .staff_comment_wrap
        padding-top: 16px
      .top_text
        font-size: 24px
        margin-bottom: 12px
      .sub_text
        padding-top: 10px
        padding-left: 12px
</style>