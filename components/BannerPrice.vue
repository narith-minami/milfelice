<template lang="pug">
.banner_faq.flex-row.justify-center
  NLink.banner_inner(to="/price")
    picture
      source.faq_banner.sp_image(:srcset="require('@/assets/images/banners/footer_banner_price_sp.png')" media="(max-width: 600px)")
      img.faq_banner(:src="require('@/assets/images/banners/footer_banner_price.png')")
</template>

<style lang="sass" scoped>
.banner_faq
  padding: 80px 0
  background-color: #FFF7FA
  .banner_inner
    // padding: 0 15px
    .faq_banner
      max-width: 1192px
      width: 100%
      source
      &.sp_image
        display: none
      @media screen and (max-width: 600px)
        border: 2px solid #F2ACB6
        width: 100%;

  @media screen and (max-width: 600px)
    padding: 16px 0
    margin-bottom: 40px
</style>