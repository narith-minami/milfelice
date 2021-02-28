<template lang="pug">
NLink.top_gallerys(to="/gallery")
  .top_gallery(@click="" v-for="(slideImage, index) in galleryItems " v-if="index < 8" :key="index")
    img(:src="slideImage.image_1.url" alt="")
</template>
<script>
export default {
  components: {
  },
  props: {
    galleryItems: Array
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="sass">
.top_gallerys
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 22px auto 0px;
  cursor: pointer;
  // border: solid 1px #C9C9C9;
  @media (max-width: 375px)
    width: 100%
  .top_gallery
    min-width: 86px;
    min-height: 91px
    max-width: 300px;
    max-height: 300px;
    @media (max-width: 1220px)
      width: 20.8vw;
      height: 20.8vw;
    @media (max-width: 320px)
      min-width: 72px;
      min-height: 81px;
    img
      width: 100%;
      height: 100%;
      object-fit: cover;
</style>