<template lang="pug">
.faq_items
  .pc_layout.text-center
    img.mg-bottom-16(:src="require('@/assets/images/faq/pc_1.svg')")
    img.mg-bottom-16(:src="require('@/assets/images/faq/pc_2.svg')")
    img.mg-bottom-16(:src="require('@/assets/images/faq/pc_3.svg')")
    img(:src="require('@/assets/images/faq/pc_4.svg')")
  .sp_layout 
</template>

<style lang="sass" scoped>
.faq_items
  .pc_layout
    padding: 0 16px
    img
      @media screen and (min-width: 1000px) and (max-width: 1024px)
        width: 100%     
      @media screen and (max-width: 1024px)
        width: calc(100vw - 100px)    
      @media screen and (max-width: 768px)
        width: 100vw
</style>