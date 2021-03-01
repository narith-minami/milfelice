<template lang="pug">
article.page_container
  PageTop(name="flow", caption="当日までの流れ")
  .page_content_wrap
    FlowItem(v-for="(item, index) in list", :key="index", :item="item")
    .more_link_wrap.align-right.flex-row.padding-top-30
      NLink(to="/faq")
        img.more_link_button(:src="require('@/assets/images/more_link_button.svg')")
  //- 装飾
  .back_image_flower
    img(:src="require('@/assets/images/flower_2.svg')")
  BannerPrice
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
import FlowItem from "~/components/FlowItem.vue";
import BannerPrice from "~/components/BannerPrice.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    FlowItem,
    BannerPrice,
  },
  async asyncData(context) {
    const data = await context.app.$getData("flows");
    return { list: data };
  },
};
</script>

<style lang="sass" scoped>
.back_image_flower
  position: relative
  top: -280px
  height: 0
  left: -30px
  @media screen and (max-width: 600px)
    top: -108px
    left: -19px
    img
      width: 150px
      transform: rotate(-10deg)

.page_content_wrap
  @media screen and (max-width: 600px)
    .more_link_wrap
      text-align: center
      .more_link_button
        width: 80%
</style>