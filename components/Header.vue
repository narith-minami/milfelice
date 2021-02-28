<template lang="pug">
// Header Start
header.site-header
  .wrapper.site-header__wrapper
    NLink(to="/")
      img.logo(:src="require('@/assets/images/logo.svg')")
    nav.nav
      button.nav__toggle(aria-expanded="false", type="button" @click="navOpen()")
        span.nav_line
        span.nav_line
        span.nav_line
      ul.nav__wrapper
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
  navModal( v-if="navFlug" @closeModal="closeNav")
// Header End
</template>

<script>

import navModal from "~/components/HeaderModal.vue";
  export default {
  components: {
    navModal,
  },
  data() {
    return {
      navFlug: false,
      width: '',
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize: function() {
      this.width = window.innerWidth;
      console.log(this.width);
      if(this.width >= 1025){
        this.navFlug = false;
      }
    },
    navOpen(){
      this.navFlug = true;
    },
    closeNav(){
      this.navFlug = false;
    },
  }
};
</script>

<style lang="sass" scoped>
.brand
  font-weight: bold
  font-size: 20px

.logo
  @media (max-width: 600px)
    width: 128.39px;

.site-header
  position: fixed
  background-color: #FFF7FA
  top: 0
  width: calc(100vw - 60px)
  padding: 23px 30px;
  z-index: 99
  @media (max-width: 600px)
    padding: 11.9px 20px
    width: calc(100vw - 40px)

.site-header__wrapper
  max-width: 1384px
  padding-top: 1rem
  padding-bottom: 1rem
  margin: 0 auto;
  @media (max-width: 600px)
    padding: 0px;

@media (min-width: 600px)
  .site-header__wrapper
    display: flex
    justify-content: space-between
    align-items: center
    padding-top: 0
    padding-bottom: 0

@media (min-width: 600px)
  .nav__wrapper
    display: flex
    justify-content: space-between;
    max-width: 1067px;
    width: calc(100vw - 235.16px)
    @media (max-width: 1380px)
      justify-content: right;
      width: auto;

@media (max-width: 1025px)
  .nav__wrapper
    position: absolute
    top: 100%
    right: 0
    left: 0
    z-index: -1
    background-color: #d9f0f7
    visibility: hidden
    opacity: 0
    transform: translateY(-100%)
    transition: transform 0.3s ease-out, opacity 0.3s ease-out

    &.active
      visibility: visible
      opacity: 1
      transform: translateY(0)

.nav__item a
  display: block
  padding: 1.5rem 0px;
  text-align: center;
  width: 151px
  &:hover
    opacity: 0.5;
  @media (max-width: 1380px)
    width: 10.48vw;

.nav__toggle
  display: none

.contact_button
  background-color: #F0B7BF
  width: 200px
  height: 48px
  border-radius: 30px
  margin-top: 7px
  margin-left: 114px;
  cursor: pointer;
  &:hover
    opacity: 0.5;
  @media (max-width: 1380px)
    margin-left: 7.91%;

@media (max-width: 1025px)
  .nav__toggle
    display: block
    position: absolute
    right: 30px;
    top: 37%
    width: 26px;
    height: 23px;
    appearance: none;
    border: none;
    background: inherit;
    padding: 0px;
    cursor: pointer;
    @media (max-width: 600px)
      right: 20px;
      width: 16px;
      height: 13px;
    &:focus
      appearance: none;
      outline: initial;
    .nav_line
      height: 1px;
      width: 100%;
      background-color: #F59C9C;
      display: block;
      position: absolute;
      left: 0px;
      &:nth-child(1)
        top: 0px;
      &:nth-child(2)
        top: 50%;
        @media (max-width: 600px)
          top: 6px
      &:nth-child(3)
        bottom: 0px;
</style>