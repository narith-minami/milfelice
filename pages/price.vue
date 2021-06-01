<template lang="pug">
article.page_container
  PageTop(name="price" caption="料金")
  .page_description_wrap.flex-row.align-center
    .page_description_inner.line-height-normal
      p.page_caption_main.text-size-xxl.mg-bottom-24 さまざまなプランをご用意しています。
      p.page_caption_sub.pc_caption Milfeliceのウェディングヘアメイクは結婚式やパーティーの種類や
        br
        | 出張先でのサポート内容によって下記のプランからお選びただけます。
        br
        | プランに含まれていないことでも出来る限り対応いたしますのでお気軽にご相談ください。
      p.page_caption_sub.sp_caption Milfeliceのウェディングヘアメイクは結婚式やパーティーの種類や出張先でのサポート内容によって下記のプランからお選びただけます。
        br
        | プランに含まれていないことでも出来る限り対応いたしますのでお気軽にご相談ください。        
      b.page_caption_sub （プランは全て税込み表示です）
  .page_content_wrap
    //- main
    PriceSection(:plan="mainPlan")
    //- sub
    .sub_plans_panel.sub_plan_1.flex-row.space-bw
      .left_item.plan_item
        SubPriceSection(:plan="receptionPlan" :show-kastura="true")
      //- 装飾SP
      .back_image_flower_sp
        img(:src="require('@/assets/images/price/flower.svg')")        
      .description_panel_sp.text-size-s.word-break {{ receptionPlan.remark }}
      .right_item.plan_item
        SubPriceSection(:plan="weddingPlan" :show-kastura="true")

    //- 装飾PC
    .back_image_flower
      img(:src="require('@/assets/images/price/flower.svg')")

    .description_panel.text-size-s.word-break {{ receptionPlan.remark }}

    //- sub2
    .sub_plans_panel.sub_plan_2.flex-row.space-bw
      .left_item.plan_item
        SubPriceSection(:plan="preparationPlan")
        .info_panel
      .description_panel_sp.text-size-s.small.word-break {{ preparationPlan.remark }}
      .right_item.plan_item
        WeddingPhotoPriceSection(:plan="weddingPhotoPlan")
    .description_panel.text-size-s.small.word-break {{ preparationPlan.remark }}

    //- ヘア小物相談会
    .sub_plans_panel.sub_plan_2.flex-row.space-bw
      .left_item.plan_item
        HairAccessoriesPriceSection(:plan="hairAccePlan")

    .more_link_button_wrap.align-right.flex-row.padding-top-30
      NLink(to="/faq")
        picture
          source.more_link_button.sp_image(:srcset="require('@/assets/images/more_link_button_sp.svg')" media="(max-width: 600px)")
          img(:src="require('@/assets/images/more_link_button.svg')")
          //- img.more_link_button(:src="require('@/assets/images/more_link_button.svg')")

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
.page_description_wrap
  .pc_caption
    display: block
  .sp_caption
    display: none
  @media screen and (max-width: 600px)
    height: 220px
    .pc_caption
      display: none
    .sp_caption
      display: block
    .page_description_inner
      width: 100%
      padding: 0 20px
      .page_caption_main
        font-size: 16px
        margin-bottom: 16px
      .page_caption_sub
        font-size: 12px
        line-height: 20px

.more_link_button_wrap
  @media screen and (max-width: 600px)
    justify-content: center;
    margin-top: -40px;
    padding-top: 0px;

.page_content_wrap
  @media screen and (max-width: 1100px)
    width: calc(100vw - 100px);
    margin-left: auto
    margin-right: auto
  @media screen and (max-width: 600px)
    padding: 0 20px
    margin-bottom: 10px
    width: auto

.back_image_flower
  position: absolute
  right: 16px
  @media screen and (max-width: 600px)
    display: none

.back_image_flower_sp
  position: absolute
  right: 16px
  display: none
  margin-top: 310px
  img
    width: 110px
  @media screen and (max-width: 600px)
    display: block

.sub_plans_panel
  &.sub_plan_1
    height: 360px
  &.sub_plan_2
    height: 250px
  .plan_item
    width: 488px
  .left_item
    margin-right: 50px
  @media screen and (max-width: 1100px)
    flex-direction: column
    &.sub_plan_1
      height: auto
    &.sub_plan_2
      height: auto
    .plan_item
      width: 100%
  @media screen and (max-width: 600px)
    flex-direction: column
    &.sub_plan_1
      height: auto
    &.sub_plan_2
      height: auto
    .plan_item
      width: 100%


.description_panel
  border: 1px solid #F59C9C
  background-color: #FFF7FA
  border-radius: 10px
  padding: 20px
  margin-bottom: 60px
  line-height: 24px
  &.small
    width: 43%
  @media screen and (max-width: 600px)
    display: none

.description_panel_sp
  border: 1px solid #F59C9C
  background-color: #FFF7FA
  border-radius: 10px
  padding: 20px
  margin-bottom: 60px
  line-height: 24px
  display: none
  margin-top: -70px
  @media screen and (max-width: 600px)
    display: block

#option_items_wrap
  width: 100%
  max-width: inherit
  padding: 80px 0
  background-color: #FFF7FA
  margin-bottom: 0px
  .option_header_wrap
    margin-bottom: 80px
  @media screen and (max-width: 600px)
    padding: 40px 0
    .option_header_wrap
      margin-bottom: 40px
      .option_title
        margin-bottom: 4px
        img
          width: 85px
      .option_caption
        font-size: 10px
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
  head: {
      title: '料金'
  },
};
</script>