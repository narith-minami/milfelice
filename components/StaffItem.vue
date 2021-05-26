<template lang="pug">
.staff_item(:class="{ back_color: order % 2 === 0 }")
  .staff_item_inner.flex-row
    .item_left.flex-row
      img.staff_image(:src="item.image.url", witdh="286px")
    .item_right
      .flex-col
        .staff_name_wrap
          .flex-row
            p.top_text {{ item.name }}
            p.sub_text {{ item.kana }}
          .job_text.flex-row {{ item.job }}
        .staff_comment_wrap.word-break.line-height-normal {{ item.comment }}
  .staff_item_works.flex-row
    img.work_image(v-for="n in 8", :key="n", :src="getImage(item, n)")
</template>

<script>
export default {
  props: {
    item: Object,
    order: Number
  },
  methods: {
    getImage(item, n) {
      if (!item["work_image_" + n]) return '';
      return item["work_image_" + n].url;
    },
  },
};
</script>

<style lang="sass" scoped>
.staff_item
  padding-top: 24px
  padding-top: 64px
  &.back_color
    background-color: #fff7fa
  padding-bottom: 16px
  .staff_item_inner
    width: 1000px
    margin-right: auto
    margin-left: auto    
    max-width: 1000px
    .item_left
      padding: 16px 16px 16px 0
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
  .staff_item_works
    width: 1000px
    margin-right: auto
    margin-left: auto   
    padding: 24px 16px
    .work_image
      width: 125px
      height: 125px
  @media screen and (max-width: 1000px)
    .staff_item_inner
      width: auto
      .item_left
        padding: 16px
    .staff_item_works
      flex-wrap: wrap
      width: auto
  @media screen and (max-width: 600px)
    .staff_item_inner
      width: 100%
      flex-direction: column
      .item_right
        padding: 0 16px 16px 16px
        .top_text
          font-size: 20px
        .sub_text
          font-size: 12px
        .job_text
          font-size: 12px
        .staff_comment_wrap
          font-size: 12px
      .item_left
        padding: 16px
        .staff_image
          width: 120px
          height: 120px
    .staff_item_works
      flex-wrap: wrap
      .work_image
        width: calc((100vw - 32px) / 4)
        height: calc((100vw - 32px) / 4)
</style>