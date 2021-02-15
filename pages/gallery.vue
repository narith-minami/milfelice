<template lang="pug">
article.page_container
  PageTop(title="Gallery", caption="ギャラリー")
  .page_content_wrap
    .gallery
      .gallery_flex

        picture.gallery_picture(v-for="index in 16" :key="index")
          source(:srcset="require('@/assets/images/gallery/gallery_' + index + '_sp.png')" media="(max-width: 600px)")
          img.gallery_img(:src="require('@/assets/images/gallery/gallery_' + index + '.png')" alt="")
        

    //- FlowItem(v-for="(item, index) in list", :key="index", :item="item")
  //- button
  //- flowr image
  BannerItems
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
// import FlowItem from "~/components/FlowItem.vue";
import BannerItems from "~/components/BannerItems.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    // FlowItem,
    BannerItems,
  },
};
</script>

<style lang="sass" scoped>
.gallery
  padding: 0 80px
  background-color: #FFF7FA

  &_flex
   display: flex
   flex-wrap: wrap;
   transform: translateY(50px);

  &_picture
    width: 210px
    > .gallery_img
      width: 100%
      height: 100%
      object-fit: cover

</style>