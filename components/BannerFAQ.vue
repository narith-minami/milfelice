<template lang="pug">
.banner_faq.flex-row.justify-center
  NLink(to="/faq").faq_link
    img(:src="require('@/assets/images/footer_banner_faq.svg')")
</template>

<style lang="sass" scoped>
.banner_faq
  padding: 80px 0
  background-color: #FFF7FA
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  .faq_link
    width: 100%;
    img
      width: 100%;
</style>