<template lang="pug">
.banner_items.flex-row.justify-center
  NLink.mg-right-16(to="/consultation")
    img.banner_1(:src="require('@/assets/images/footer_banner_1.png')")
  NLink(to="/consultation#flower_item")
    img.banner_2(:src="require('@/assets/images/footer_banner_2.png')")
</template>

<style lang="sass" scoped>
.banner_items
  padding: 80px 0
</style>