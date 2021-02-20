<template lang="pug">
NLink.top_gallerys(to="/gallery")
  .top_gallery(@click="" v-for="(slideImage, index) in slideImages" :key="index")
    img(:src="require('@/assets/images/top/gallery/'+slideImage+'')" alt="")
</template>
<script>
export default {
  components: {
  },
  props: {
  },
  data() {
    return {
      slideImages:[
        'top_gallery1.png',
        'top_gallery2.png',
        'top_gallery3.png',
        'top_gallery4.png',
        'top_gallery5.png',
        'top_gallery6.png',
        'top_gallery7.png',
        'top_gallery8.png',
      ]
    }
  }
};
</script>

<style lang="sass">
.top_gallerys
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 22px auto 0px;
  cursor: pointer;
  .top_gallery
    width: 300px;
    height: 300px;
    img
      width: 300px;
      height: 300px;
</style>