<template>
  <div class="container">
    <CommonHeader></CommonHeader>
    <Nuxt />
    <footer id="footer" class="text-center">
      <span>©︎ 2021 Milfelice.inc</span>
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
    title: "結婚式・ウェディングヘアメイク・出張ヘアメイクならMilfeliceにお任せ",
  }
};
</script>

<style lang="sass" scoped>
#footer
  font-size: 10px;
</style>