<template lang="pug">
.option_items
  .pc_layout.text-center
    img.mg-bottom-16(:src="require('@/assets/images/price/option_1.svg')")
    img#option_katsura.mg-bottom-16(:src="require('@/assets/images/price/option_2.svg')")
    img(:src="require('@/assets/images/price/option_3.svg')")
  .sp_layout 
</template>

<style lang="sass" scoped>
.option_items
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