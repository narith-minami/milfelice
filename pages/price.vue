<template lang="pug">
article.page_container
  PageTop(name="price" caption="料金")
  .page_description_wrap.flex-row.align-center
    .page_description_inner.line-height-normal
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
    .sub_plans_panel.sub_plan_1.flex-row.space-bw
      .left_item.plan_item
        SubPriceSection(:plan="receptionPlan" :show-kastura="true")
      .right_item.plan_item
        SubPriceSection(:plan="weddingPlan" :show-kastura="true")
    
    //- 装飾
    .back_image_flower
      img(:src="require('@/assets/images/price/flower.svg')")

    .description_panel.text-size-s.word-break {{ receptionPlan.remark }}

    //- sub2
    .sub_plans_panel.sub_plan_2.flex-row.space-bw
      .left_item.plan_item
        SubPriceSection(:plan="preparationPlan")
        .info_panel
      .right_item.plan_item
        WeddingPhotoPriceSection(:plan="weddingPhotoPlan")
    .description_panel.text-size-s.small.word-break {{ preparationPlan.remark }}

    //- ヘア小物相談会
    .sub_plans_panel.sub_plan_2.flex-row.space-bw
      .left_item.plan_item
        HairAccessoriesPriceSection(:plan="hairAccePlan")

    .align-right.flex-row.padding-top-30
      NLink(to="/faq")
        img(:src="require('@/assets/images/more_link_button.svg')")

  //- Faq
  #option_items_wrap.page_content_wrap
    .option_header_wrap.text-center
      .option_title.mg-bottom-24
        img(:src="require('@/assets/images/price/label_option.svg')")
      .option_caption オプション料金
    Options
  BannerItems
</template>

<style lang="sass" scoped>
.back_image_flower
  position: absolute
  right: 16px

.sub_plans_panel
  &.sub_plan_1
    height: 360px
  &.sub_plan_2
    height: 250px
  .plan_item
    width: 484px

.description_panel
  border: 1px solid #F59C9C
  background-color: #FFF7FA
  border-radius: 10px
  padding: 20px
  margin-bottom: 60px
  line-height: 24px
  &.small
    width: 43%

#option_items_wrap
  width: 100%
  padding: 80px 0
  background-color: #FFF7FA
  .option_header_wrap
    margin-bottom: 80px
</style>

<script>
import PageTop from "~/components/PageTopView.vue";
import SubPriceSection from "~/components/price/SubPriceSection.vue";
import PriceSection from "~/components/price/PriceSection.vue";
import WeddingPhotoPriceSection from "~/components/price/WeddingPhotoPriceSection.vue";
import HairAccessoriesPriceSection from "~/components/price/HairAccessoriesPriceSection.vue";
import Options from "~/components/OptionItems.vue";
import BannerItems from "~/components/BannerItems.vue";

export default {
  layout: "page",
  components: {
    PageTop,
    PriceSection,
    SubPriceSection,
    WeddingPhotoPriceSection,
    HairAccessoriesPriceSection,
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
      weddingPhotoPlan: data[4],
      hairAccePlan: data[5]
    };
  },
};
</script>