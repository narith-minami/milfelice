<template lang="pug">
article.page_container
  PageTop(title="Gallery", caption="ギャラリー")
  .page_content_wrap
    .gallery
      .gallery_flex
        
        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_1_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_1.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_2_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_2.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_3_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_3.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_4_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_4.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_5_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_5.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_6_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_6.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_7_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_7.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_8_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_8.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_9_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_9.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_10_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_10.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_11_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_11.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_12_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_12.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_13_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_13.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_14_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_14.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_15_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_15.png" alt="")

        picture.gallery_picture
          source(srcset="@/assets/images/gallery/gallery_16_sp.png" media="(max-width: 600px)")
          img.gallery_img(src="@/assets/images/gallery/gallery_16.png" alt="")

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
    > img
      width: 100%
      height: 100%
      object-fit: cover

</style>