<template lang="pug">
.banner_faq.flex-row.justify-center
  NLink(to="/price")
    img(:src="require('@/assets/images/footer_banner_price.jpg')")
</template>

<style lang="sass" scoped>
.banner_faq
  padding: 80px 0
  background-color: #FFF7FA
  img
    border: 4px solid #F2ACB6
    max-width: 1192px
    width: calc(100% - 8px);
</style>