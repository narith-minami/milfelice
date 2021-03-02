<template lang="pug">
.voice-page(name="voicePage")
  .voice-page-container
    .voice-wrapper
      p.voice-title {{voiceItem.title}}
      .voice-detail
        .detail-flex
          p.date {{voiceItem.date}}
          p.name {{voiceItem.user_name}}
        p.staf {{voiceItem.staff}}
      img(:src="voiceItem.image.url" alt="")
      p.voice-text {{voiceItem.body}}
  a.back-page(@click="$emit('closePage')") TOPへ戻る
</template>

<script>
export default {
  created() {
    this.fetch();
  },
  props: {
    voiceList: Array,
    voiceNumber: Number,
  },
  data() {
    return {
      voiceItem:{}
    }
  },
  methods: {
    fetch(){
      this.voiceItem = this.voiceList[this.voiceNumber];
      console.log(this.voiceList[this.voiceNumber]);
    }
  }
}
</script>

<style lang='sass'>
.voice-page
  padding: 52px 14px 60px;
  margin-top: 100px;
  background-color: #FFFAFC
  @media (max-width: 600px)
    margin-top: 54.94px
  .voice-page-container
    border-radius: 10px;
    width: auto;
    background-color: #ffffff;
  .back-page
    margin: 40px auto 0px;
    font-size: 12px
    color: #3A3A3A
    display: block
    width: 92px
    text-align: right
    position: relative
    &:after
      content: ''
      display: block
      background-image: url(~@/assets/images/top/back_arrow.svg);
      width: 5px;
      height: 12px;
      position: absolute
      left: 0px
      top: 4px
      background-size: cover;
  .voice-wrapper
    padding: 40px 21px 104px;
    .voice-title
      font-size: 16px;
      font-weight: bold;
      color: #3A3A3A;
      padding-bottom: 10px;
      letter-spacing: 0.125rem;
    .voice-detail
      p
        font-size: 12px;
        color: #3A3A3A;
      .detail-flex
        display: flex
        justify-content: left
        .date
          margin-right: 8px
    img
      width: 100%
      margin: 20px 0px 27px;
    .voice-text
      color: #3A3A3A;
      font-size: 11px;
      letter-spacing: 0.05rem;
      line-height: 1.8;
      word-break: break-all;
      white-space: pre-wrap;
</style>