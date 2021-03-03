<template lang="pug">
.faq_items
  .pc_layout.text-center
    img.mg-bottom-16(v-for="n in 7" :key="n" :src="require('@/assets/images/faq/pc_' + n + '.svg')")
  .sp_layout
    img.mg-bottom-16(v-for="n in 7" :key="n" :src="require('@/assets/images/faq/sp_' + n + '.svg')")
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
  .sp_layout
    display: none
    padding: 0 15px

  @media screen and (max-width: 600px)
    .pc_layout
      display: none
    .sp_layout
      display: block
</style>