<template lang="pug">
article.page_container
  PageTop(name="faq", caption="よくある質問")
  .page_description_wrap.flex-row.align-center.line-height-normal
    .page_description_inner.flex-row.space-bw
      .left_panel
        p.faq_top_title.text-size-xxl.mg-bottom-24 よくある質問をまとめました。
        p.faq_top_caption 結婚式はわからないことだらけ。
          br
          | ミルファリーチェでよくある質問は以下となります。
          br
          | その他御不明点などございましたら、お気軽にお声がけください。
      .right_panel.flex-row
        NLink(to="/consultation")
          img.more_link_button(
            :src="require('@/assets/images/consul_link_button.svg')"
          )

  //- sp view 
  .consul_link_button_wrap.text-center
    NLink(to="/consultation")
      img.more_link_button(width="180px" :src="require('@/assets/images/consul_link_button.svg')")

  .page_content_wrap
    FAQItems
  BannerPrice.price-container
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
import FAQItems from "~/components/FAQItems.vue";
import BannerPrice from "~/components/BannerPrice.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    FAQItems,
    BannerPrice,
  },
};
</script>

<style lang="sass" scoped>
.page_description_wrap
  .page_description_inner
    .right_panel
      align-items: flex-end

.price-container
  padding: 80px 16px 82px
  @media screen and (max-width: 600px)
    padding: 40px 24px 56px
    margin-bottom: 0px

.page_container
  @media screen and (max-width: 600px)
    .left_panel
      .faq_top_title
        font-size: 16px
        margin-bottom: 8px
      .faq_top_caption
        font-size: 12px
        line-height: 24px
    .right_panel
      display: none
      .more_link_button
        width: 80%

.page_description_wrap
  @media screen and (max-width: 600px)
    height: 200px

.consul_link_button_wrap
  display: none
  padding-top: 30px
  @media screen and (max-width: 600px)
    display: block
</style>