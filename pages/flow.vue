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
  BannerPrice.price-container
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
  head: {
      title: '当日までの流れ'
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

.price-container
  padding: 80px 16px 82px;
  @media screen and (max-width: 600px)
    padding: 40px 24px 56px;
    margin-bottom: 0px;

.page_content_wrap
  @media screen and (max-width: 1100px)
    width: 90%
  @media screen and (max-width: 600px)
    width: 100%
    .more_link_wrap
      text-align: center
      .more_link_button
        width: 80%
</style>