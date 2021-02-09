<template lang="pug">
article
  //- first view
  section

  section

  //- banners
  section
    BannerPrice
    BannerItems

  //- style gallery
  section

  //- customers voice
  section

  //- faq
  section
    BannerFAQ
</template>

<script>
import BannerItems from "~/components/BannerItems.vue";
import BannerPrice from "~/components/BannerPrice.vue";
import BannerFAQ from "~/components/BannerFAQ.vue";

export default {
  components: {
    BannerItems,
    BannerPrice,
    BannerFAQ,
  },
};
</script>

<style lang="sass" scoped>
</style>
