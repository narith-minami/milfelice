<template lang="pug">
.option_items
  .pc_layout.text-center
    img.mg-bottom-16(:src="require('@/assets/images/price/option_1.svg')")
    img#option_katsura.mg-bottom-16(:src="require('@/assets/images/price/option_2.svg')")
    img(:src="require('@/assets/images/price/option_3.svg')")
  .sp_layout
    img.mg-bottom-16(:src="require('@/assets/images/price/option_sp_1.svg')")
    img#option_katsura_sp.mg-bottom-16(:src="require('@/assets/images/price/option_sp_2.svg')")
    img(:src="require('@/assets/images/price/option_sp_3.svg')")  
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
  .sp_layout
    display: none
    padding: 0 15px
    img
      margin-left: auto
      margin-right: auto
      display: block
      width: 100%

  @media screen and (max-width: 600px)
    .pc_layout
      display: none
    .sp_layout
      display: block
</style>