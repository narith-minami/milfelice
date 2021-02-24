<template lang="pug">
.voice-modal(name="voiceModal2")
  .vm--overlay(@click="$emit('closeModal')")
  .vm--modal
    button.btn-close.button(@click="$emit('closeModal')")
    .voice-wrapper
      p.voice-title {{voiceItem.title}}
      .voice-detail
        .detail-flex
          p.date {{voiceItem.date}}
          p.name {{voiceItem.user_name}}
        p.staf {{voiceItem.staff}}
      img(:src="voiceItem.image.url" alt="")
      p.voice-text {{voiceItem.body}}


</template>

<script>
export default {
  created() {
  },
  props: {
    voiceItem: Object
  },
  data() {
    return {
    }
  },
}
</script>

<style lang='sass'>
@keyframes fadein-bottom
  0%
    opacity: 0;
    transform: translate(-50%, -45%);
  100%
    opacity: 1;
    transform: translate(-50%, -50%);
.voice-modal
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  .vm--modal
    border-radius: 10px;
    overflow: scroll;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 640px;
    height: 95%;
    opacity: 0;
    animation-name: fadein-bottom;
    animation-duration: .5s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    background-color: #ffffff;
  .vm--overlay
    background-color: rgba(60,60,60,0.8)
    height: 100vh;
    width: 100vw;
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
      .detail-flex
        display: flex
        justify-content: left
        .date
          margin-right: 8px
    img
      width: 560px
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