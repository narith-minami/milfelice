<template lang="pug">
article.page_container
  PageTop(title="Faq", caption="よくある質問")
  .page_description_wrap.flex-row.align-center
    .page_description_inner.flex-row.space-bw
      .left_panel
        p.text-size-xxl.mg-bottom-24 よくある質問をまとめました。
        p 結婚式はわからないことだらけ。
          br
          | ミルファリーチェでよくある質問は以下となります。
          br
          | その他御不明点などございましたら、お気軽にお声がけください。
      .right_panel.flex-row
        NLink(to="/consultation")
          img(:src="require('@/assets/images/consul_link_button.svg')")
  .page_content_wrap
    FAQItems
  BannerPrice
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
</style>