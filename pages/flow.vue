<template lang="pug">
article.page_container
  PageTop(name="flow" title="Flow of the day", caption="当日の流れ")
  .page_content_wrap
    FlowItem(v-for="(item, index) in list", :key="index", :item="item")
    .align-right.flex-row.padding-top-30
      NLink(to="/faq")
        img(:src="require('@/assets/images/more_link_button.svg')")
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
  top: -330px
  height: 0
</style>