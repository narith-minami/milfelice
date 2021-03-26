<template lang="pug">
.nav-modal(name="navModal")
  .vm--overlay(@click="$emit('closeModal')")
  .vm--modal
    button.btn-close(@click="$emit('closeModal')")
      img(:src="require('@/assets/images/top/gallery/gallery_close.svg')")
    ul.nav__wrapper
      li.nav__item
        a(href="/") TOP
      li.nav__item
        a(href="/gallery") ギャラリー
      li.nav__item
        a(href="/price") 料金
      li.nav__item
        a(href="/flow") 当日までの流れ
      li.nav__item
        a(href="/staff") スタッフ
      li.nav__item
        a(href="/faq") FAQ
      li.nav__item
        .contact_button.text-white.flex-row(@click="goContact")
          span.mg-auto お問い合わせ


</template>

<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
export default {
    mounted() {
        const modal = document.querySelector('.vm--modal')
        disableBodyScroll(modal)
    },
    methods: {
        goContact() {
            window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfRnvnpri80dMxbwlnvVMipe6kjiscxIukEOL370iKOhj1Tgw/viewform",
                "_blank"
            );
        },
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
  height: 100%;
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
    max-width: 347px;
    max-height: 463px;
    width: 95%;
    height: 100%;
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
    position: fixed;
    top: 0;
    left: 0;
  .btn-close
    cursor: pointer;
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 20px;
    top: 20px;
    display: block
    background-color: inherit
    padding: 0px
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