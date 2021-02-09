<template lang="pug">
.price_section
  .main_plan.flex-col
    .header_wrap.flex-row.space-bw
      .left_caption.flex-row
        span.mg-right-20 挙式〜披露宴
        span 1日サポートプラン
      .right_caption
        span サポート / 9時間
    .detail_wrap.flex-row.space-bw.mg-bottom-16
      //- Left Side
      .left_item
        .flex-row
          .color_label.mix 洋装＋和装
          .price_bold ¥100,000
        .flex-row.padding-top-16
          .option_wrap.flex-col
            span ・ヘアメイクリハーサル
            span ・当日ヘアメイク
            span ・ドレスフィッティング
            span ・お色直し
            span ・新郎新婦和装着付け
            span ・お引き上げ
            span ・新郎様のお支度
        .benefits
          span
          | ＜プラン特典＞ <br>
          | 挙式3ヶ月以上前にお申し込みのお客様に限り ¥10,000 OFF
      //- Right Side
      .right_item
        .flex-row
          .color_label.pink.flex-row 
            span.mg-auto 洋装のみ
          .price_bold ¥80,000
        .flex-row.padding-top-16
          .option_wrap.flex-col
            span ・ヘアメイクリハーサル
            span ・当日ヘアメイク
            span ・ドレスフィッティング
            span ・お色直し
            span ・新郎新婦和装着付け
            span ・お引き上げ
            span ・新郎様のお支度
    //- panel
    .description_panel
      span
      | アテンドご希望の場合は、プラス¥10,000にて承ります。<br>
      | かつらをご利用の方は別途料金になりますので、かつらオプション詳細をご覧ください。<br>
      | 親族会食→挙式→披露宴など2部制スタイル、または、9時間を超える場合は延長料金をいただきます。（最大¥20,000）
  .sub_plan.flex-row
    .flex-col
      div 披露宴のみプラン
    .flex-col
      div 挙式のみプラン
  .other_plan
</template>

<style lang="sass" scoped>
.price_section
  .description_panel
    border: 1px solid #F59C9C
    background-color: #FFF7FA
    border-radius: 10px
    padding: 20px
  .main_plan
    margin-bottom: 80px
    .header_wrap
      border-bottom: 1px solid #F59C9C
      margin-bottom: 24px
      .left_caption
        font-size: 32px
    .detail_wrap
      .price_bold
        font-size: 44px
        font-weight: bold
      .color_label
        width: 145px
        height: 44px
        border-radius: 8px
        &.mix
          background-color: #F0B7BF
        &.pink
          background-color: #F0B7BF
</style>