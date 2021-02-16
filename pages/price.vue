<template lang="pug">
article.page_container
  PageTop(name="price" caption="料金")
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
    //- main
    PriceSection(:plan="mainPlan")
    //- sub
    .sub_plans_panel.flex-row.space-bw
      .left_item.plan_item
        SubPriceSection(:plan="receptionPlan" show-kastura="true")
      .right_item.plan_item
        SubPriceSection(:plan="weddingPlan" show-kastura="true")
    
    .description_panel.word-break {{ receptionPlan.remark }}
    //- sub2
    .sub_plans_panel.flex-row.space-bw
      .left_item.plan_item
        SubPriceSection(:plan="preparationPlan")
        .info_panel
      .right_item.plan_item
        SubPriceSection(:plan="weddingPlan")
    .description_panel.small.word-break {{ preparationPlan.remark }}
    //- ヘア小物相談会Link
    
  //- Faq
  #option_items_wrap.page_content_wrap
    Options
  BannerItems
</template>

<style lang="sass" scoped>
.sub_plans_panel
  .plan_item
    width: 46%

.description_panel
  border: 1px solid #F59C9C
  background-color: #FFF7FA
  border-radius: 10px
  padding: 20px
  margin-bottom: 60px
  &.small
    width: 43%

#option_items_wrap
  width: 100%
  padding: 80px 0
  background-color: #FFF7FA
</style>

<script>
import PageTop from "~/components/PageTopView.vue";
import SubPriceSection from "~/components/SubPriceSection.vue";
import PriceSection from "~/components/PriceSection.vue";
import Options from "~/components/OptionItems.vue";
import BannerItems from "~/components/BannerItems.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    PriceSection,
    SubPriceSection,
    Options,
    BannerItems,
  },
  async asyncData(context) {
    const data = await context.app.$getData("price");
    return {
      mainPlan: data[0],
      receptionPlan: data[1],
      weddingPlan: data[2],
      preparationPlan: data[3],
    };
  },
};
</script>