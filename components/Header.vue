<template lang="pug">
// Header Start
header.site-header
  .wrapper.site-header__wrapper
    NLink(to="/")
      img.logo(:src="require('@/assets/images/logo.svg')")
    nav.nav
      button.nav__toggle(aria-expanded="false", type="button")
        | menu
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
// Header End
</template>

<style lang="sass" scoped>
.brand
  font-weight: bold
  font-size: 20px

.site-header
  position: fixed
  background-color: #FFF7FA
  top: 0
  width: calc(100vw - 60px)
  padding: 18px 30px
  z-index: 99

.site-header__wrapper
  max-width: 1384px
  padding-top: 1rem
  padding-bottom: 1rem
  margin: 0 auto;

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

@media (max-width: 599px)
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
  padding: 1.5rem 1rem

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
  @media (max-width: 1380px)
    margin-left: 7.91%;

@media (max-width: 599px)
  .nav__toggle
    display: block
    position: absolute
    right: 1rem
    top: 1rem
</style>