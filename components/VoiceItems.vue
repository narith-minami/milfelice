<template lang="pug">
.voice_items
  .voice_item(
    @click="openModal(index, voiceItem.id)",
    v-for="(voiceItem, index) in voiceList",
    :key="index"
  )
    img(:src="voiceItem.image_sub.url", alt="")
    .text_content
      p.text_bold {{ voiceItem.title }}
      p.text_normal {{ voiceItem.staff }}
      p.text_min {{ voiceItem.date }} {{ voiceItem.user_name }}
  //- 詳細
  voiceModal1(
    v-if="voiceModalFlug1",
    @closeModal="closeModal1",
    :voiceItem="voiceList[selectIndex]"
  )
</template>
<script>
import voiceModal1 from "~/components/voiceModal/voiceModal1.vue";
export default {
  components: {
    voiceModal1,
  },
  props: {
    voiceList: Array,
  },
  data() {
    return {
      voiceModalFlug1: false,
      selectIndex: 0,
      spFlug: "",
      width: "",
    };
  },
  created() {
    // this.handleResize();
  },
  mounted: function () {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      if (this.width >= 600) {
        this.spFlug = false;
        return;
      }
      this.spFlug = true;
    },
    openModal(index, date) {
      const number = index + 1;

      if (!this.spFlug) {
        this.selectIndex = index
        this.voiceModalFlug1 = true;
        return;
      }
      this.$emit("goVoicePage", date);
      return;
    },
    closeModal1() {
      this.voiceModalFlug1 = false;
    },
    closeModal2() {
      this.voiceModalFlug2 = false;
    },
    closeModal3() {
      this.voiceModalFlug3 = false;
    },
  },
};
</script>

<style lang="sass">
.voice_items
  display: flex
  justify-content: space-between
  max-width: 1200px
  margin: 0 auto
  flex-wrap: wrap
  @media (max-width: 1165px)
    display: block
    padding: 0px 15px
  @media (max-width: 600px)
    padding: 0px
  .voice_item
    cursor: pointer
    position: relative
    width: 385px
    height: 295px
    margin-bottom: 24px
    @media (max-width: 1165px)
      margin: 0 auto
      width: 53.46vw
      height: 40.96vw
      margin-bottom: 24px
    @media (max-width: 600px)
      width: 100%
      height: 53.38vw
      margin-bottom: 24px
    &:hover
      opacity: 0.6
    img
      width: 100%
      height: 100%
      object-fit: cover
    .text_content
      width: calc(100% - 20px)
      position: absolute
      bottom: 0px
      left: 0px
      padding: 20px 0px 18px 20px
      background-color: rgba(255 , 255 , 255 , 0.8)
      p
        color: #3A3A3A
      .text_bold
        font-size: 19.5px
        font-weight: bold
        padding-bottom: 4px
        @media (max-width: 600px)
          font-size: 16px
      .text_normal
        font-size: 14px
        padding-bottom: 5px
        @media (max-width: 600px)
          font-size: 12px
      .text_min
        font-size: 14px
        @media (max-width: 600px)
          font-size: 12px
</style>