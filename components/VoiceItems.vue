<template lang="pug">
.voice_items
  .voice_item(@click="" v-for="(voiceItem, index) in voiceItems" :key="index")
    img(:src="require('@/assets/images/top/voice_image1.png')" alt="")
    .text_content
      p.text_bold {{voiceItem.text}}
      p.text_normal {{voiceItem.staf}}
      p.text_min {{voiceItem.detail}}
</template>
<script>
export default {
  components: {
  },
  props: {
  },
  data() {
    return {
      voiceItems:[
        {
          text: '挙式披露宴1日サポートプラン',
          staf: '担当:比留間',
          detail: '2017/11/11 Wさんご夫妻'
        },
        {
          text: '挙式披露宴1日サポートプラン',
          staf: '担当:比留間',
          detail: '2017/11/11 Wさんご夫妻'
        },
        {
          text: '挙式披露宴1日サポートプラン',
          staf: '担当:比留間',
          detail: '2017/11/11 Wさんご夫妻'
        }
      ]
    }
  }
};
</script>

<style lang="sass">
.voice_items
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  .voice_item
    cursor: pointer;
    position: relative;
    max-width: 385px;
    &:hover
      opacity: 0.6;
    .text_content
      width: 100%;
      position: absolute;
      bottom: 0px;
      padding: 20px 0px 18px 20px;
      background-color: rgba(255 , 255 , 255 , 0.8)
      p
        color: #3A3A3A;
      .text_bold
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 4px;
      .text_normal
        font-size: 16px;
        padding-bottom: 5px;
      .text_min
        font-size: 14px;

</style>