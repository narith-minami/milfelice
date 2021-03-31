<template lang="pug">
.banner_faq.flex-row.justify-center
  NLink(to="/faq").faq_link
    picture
      source.faq_banner.sp_image(:srcset="require('@/assets/images/banners/footer_banner_faq-sp.png')" media="(max-width: 600px)")
      img.faq_banner(:src="require('@/assets/images/banners/footer_banner_faq.png')" alt="よくある質問はこちら")
</template>

<style lang="sass" scoped>
.banner_faq
  padding: 80px 0
  background-color: #FFF7FA
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 600px)
    padding: 25.4px 27px 40.5px;
  .faq_link
    width: 100%;
    img
      width: 100%;
</style>