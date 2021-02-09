<template lang="pug">
article.page_container
  PageTop(title="Gallery", caption="ギャラリー")
  .page_content_wrap
    //- FlowItem(v-for="(item, index) in list", :key="index", :item="item")
  //- button
  //- flowr image
  BannerItems
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
// import FlowItem from "~/components/FlowItem.vue";
import BannerItems from "~/components/BannerItems.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    // FlowItem,
    BannerItems,
  },
};
</script>