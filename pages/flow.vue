<template lang="pug">
article.page_container
  PageTop(title="Flow of the day", caption="当日の流れ")
  .page_content_wrap
    FlowItem(v-for="(item, index) in list", :key="index", :item="item")
  //- button
  //- flowr image
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