<template lang="pug">
.nav-modal(name="navModal")
  .vm--overlay(@click="$emit('closeModal')")
  .vm--modal
    button.btn-close.button(@click="$emit('closeModal')")
    ul.nav__wrapper
      li.nav__item
        NLink(to="/") TOP
      li.nav__item
        NLink(to="/gallery") ギャラリー
      li.nav__item
        NLink(to="/price") 料金
      li.nav__item
        NLink(to="/flow") 当日の流れ
      li.nav__item
        NLink(to="/staff") スタッフ
      li.nav__item
        NLink(to="/faq") FAQ
      li.nav__item
        .contact_button.text-white.flex-row(href="#")
          span.mg-auto お問い合わせ


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
@keyframes fadein-bottom
  0%
    opacity: 0;
    transform: translate(-50%, -45%);
  100%
    opacity: 1;
    transform: translate(-50%, -50%);
.nav-modal
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
    width: 347px;
    height: 463px;
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
  .nav__wrapper
    padding: 40px 40px 23px
    list-style: none;
    li
      text-align: center
      a
        padding: 19px 0px
        display: block
        color: #3A3A3A
        font-size: 16px
      .contact_button
        background-color: #F0B7BF
        width: 200px
        height: 48px
        border-radius: 30px
        margin: 27px auto 0px
        cursor: pointer;
        font-weight: bold
</style>