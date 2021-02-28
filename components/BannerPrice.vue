<template lang="pug">
.banner_faq.flex-row.justify-center
  NLink.banner_inner(to="/price")
    picture
      source.faq_banner.sp_image(:srcset="require('@/assets/images/banners/footer_banner_price_sp.png')" media="(max-width: 600px)")
      img.faq_banner(:src="require('@/assets/images/banners/footer_banner_price.jpg')")
</template>

<style lang="sass" scoped>
.banner_faq
  padding: 80px 0
  background-color: #FFF7FA
  .banner_inner
    padding: 0 16px;
    .faq_banner
      border: 4px solid #F2ACB6
      max-width: 1192px
      width: calc(100% - 8px)
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