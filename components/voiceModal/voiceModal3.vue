<template lang="pug">
modal.voice-modal(name="voiceModal3" :resizable="false"  :width="640" :height="'95%'")
  button.btn-close.button(@click="$emit('closeModal')")
  .voice-wrapper
    p.voice-title {{voiceItems.text}}
    .voice-detail
      p.date {{voiceItems.detail}}
      p.staf {{voiceItems.staf}}
    img(:src="require('@/assets/images/top/'+voiceItems.image+'.png')" alt="")
    p.voice-text 一言では伝えられないほどミルフェリーチェ様には感謝しております。<br>私は宮沢さんが居てくださったので、当日笑顔が絶えませんでした。<br>ホテル提携のヘアメイクリハーサルで感じた不安や悲しみは、メイクリハーサルの時の宮沢さんの明るい笑顔と時間内で目一杯のご提案で結婚式への不安を全て払拭していただき、主人も宮沢さんに当日お会いできるの楽しみにしておりました。
    p.voice-text 当日も最初から最後までずっと付き添っていただき、心強く笑顔と細やかな気遣いでとっても癒されました。両親への記念品を渡すときは披露宴会場にも居て下さってこちらの緊張もほぐれました。
    p.voice-text 松岡さんの紹介がきっかけですが、結果ブーケやヘアメイク・ドレスフィッティングまで提携美容院ではないだろう一人一人の花嫁さんを一番に考えた対応で主人も私も安心して楽しく一日を過ごすことができました。
    p.voice-text メイクも髪型もゲストにとっても好評で、とても風が強い日でしたがこまめに直していただいたおかげでほとんど崩れることなく二次会まで楽しめました。
    p.voice-text 急遽、二次会のヘアの変更を当日お願いしましたが快く受けていただき、そちらの髪型も褒められました。
    p.voice-text 荒川さんに作っていただいたアイテムもゲストの方に褒めていただいて、自宅でも飾れるようにスペースを作っております。
    p.voice-text 宮沢さん、荒川さんはこれまでも、これからも毎週色々な方の結婚式のご対応があるのかと存じます。新郎新婦の人生の重要なポイントを、一緒になって考え作っていくお仕事を毎週のようにこなされていて、楽しい反面体力勝負なところも多くあるかと思います。<br>お体ご無理はなさらないでくださいね。
    p.voice-text 長くなりましたが、細やかな気配りとかわいらしくも頼りになるその笑顔でこれからも 沢山の花嫁様・出会う方々を綺麗に・楽しい一日をご提供していってください。<br>本当にありがとうございました。


</template>

<script>
export default {
  created() {
  },
  props: {
  },
  data() {
    return {
      voiceItems:{
        text: '挙式披露宴1日サポートプラン',
        staf: 'ヘアメイク担当：宮澤　フラワー小物担当：荒川',
        detail: '2017/11/11 Wさんご夫妻',
        image: 'voice_detail1',
      }
    }
  },
  methods: {
    
  }
}
</script>

<style lang='sass'>
.voice-modal
  .vm--modal
    border-radius: 10px;
    overflow: scroll
  .vm--overlay
    background-color: rgba(60,60,60,0.8)
  .btn-close
    cursor: pointer;
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: initial;
    content: '';
    background-image: url(~@/assets/images/top/gallery/gallery_close.svg);
    &:focus
      outline: none;
  .voice-wrapper
    padding: 60px 40px 80px;
    .voice-title
      font-size: 24px;
      font-weight: bold;
      color: #3A3A3A;
      padding-bottom: 32px;
      letter-spacing: 0.125rem;
    .voice-detail
      p
        font-size: 16px;
        color: #3A3A3A;
    img
      margin: 20px 0px 40px;
    .voice-text
      padding-bottom: 33px;
      color: #3A3A3A;
      font-size: 16px;
      letter-spacing: 0.05rem;
      line-height: 1.8;
      &:last-child
        padding-bottom: 0px;
</style>