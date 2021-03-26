<template lang="pug">
.partner_item
  .thumbnail_wrap.text-center
    img.partner_logo.mg-bottom-16(:src="item.image.url")
  .partner_name {{ item.name }}
  .link.mg-bottom-12
    .inner_link.mg-bottom-2
      a(:href="item.link", target="_blank") {{ item.link }}
  .detail.word-break-all.line-height-normal {{ item.detail }}
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
  width: 47%
  padding-right: 24px
  margin-bottom: 50px
  .partner_name
    font-size: 24px
    margin-bottom: 13px
  .link
    border-bottom: 1px solid #F59C9C
  .partner_logo
    width: 294px
  @media screen and (min-width: 600px) and (max-width: 1000px)
    margin: auto
    padding-bottom: 40px
  @media screen and (max-width: 600px)
    width: auto
    padding-right: 0px
    .thumbnail_wrap
      width: 100%
    .partner_logo
      width: inherit
    .partner_name
      font-size: 20px
    .inner_link
      font-size: 12px
    .detail
      font-size: 12px
</style>