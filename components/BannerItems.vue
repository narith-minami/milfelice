<template lang="pug">
.banner_items.flex-row.space-bw
  NLink(to="/consultation")
    img.banner_1.width-100per(:src="require('@/assets/images/footer_banner_1.png')")
  NLink(to="/consultation#flower_item")
    img.banner_2.width-100per(:src="require('@/assets/images/footer_banner_2.png')")
</template>

<style lang="sass" scoped>
.banner_items
  padding: 80px 0
  max-width: 1200px;
  margin: 0 auto;
</style>