<template lang="pug">
.partner_item
  .thumbnail_wrap
    img.mg-bottom-16(:src="require('@/assets/images/' + item.image_name)")
  .partner_name {{ item.name }}
  .link.mg-bottom-12
    .inner_link.mg-bottom-2
      a(:href="item.link", target="_blank") {{ item.link }}
  .detail.word-break-all {{ item.detail }}
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="sass" scoped>
.partner_item
  max-width: 489px
  padding-right: 24px
  margin-bottom: 50px
  .partner_name
    font-size: 24px
    margin-bottom: 13px
  .link
    border-bottom: 1px solid #F59C9C
</style>