<template lang="pug">
article.page_container
  PageTop(title="Price", caption="料金")
  .page_description_wrap.flex-row
    .mg-auto
      p.text-size-xxl.mg-bottom-24 さまざまなプランをご用意しています。
      p Milfeliceのウェディングヘアメイクは結婚式やパーティーの種類や
        br
        | 出張先でのサポート内容によって下記のプランからお選びただけます。
        br
        | プランに含まれていないことでも出来る限り対応いたしますのでお気軽にご相談ください。
      b （プランは全て税抜き表示です）
  .page_content_wrap
    PriceSection
  //- Faq
  //- button
  //- flowr image
  BannerItems
</template>

<script>
import PageTop from "~/components/PageTopView.vue";
import PriceSection from "~/components/PriceSection.vue";
import BannerItems from "~/components/BannerItems.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    PriceSection,
    BannerItems,
  },
  async asyncData(context) {
    const data = await context.app.$getData("staff");
    return { list: data };
  },
};
</script>