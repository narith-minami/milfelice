<template>
  <div class="container">
    <CommonHeader></CommonHeader>
    <Nuxt />
    <footer id="footer" class="text-center">
      <span>Copyright</span>
    </footer>
  </div>
</template>

<script>
import CommonHeader from "~/components/Header.vue";

export default {
  components: {
    CommonHeader,
  },
  head: {
    titleTemplate: "Milfelice | ミルフェリーチェ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" },
    ],
  },
};
</script>

<style lang="sass" scoped>
</style>