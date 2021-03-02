<template lang="pug">
.voice_items
  .voice_item(@click="openModal(index)" v-for="(voiceItem, index) in voiceList" :key="index")
    img(:src="voiceItem.image.url" alt="")
    .text_content
      p.text_bold {{ voiceItem.title }}
      p.text_normal {{ voiceItem.staff }}
      p.text_min {{  voiceItem.date }} {{ voiceItem.user_name }}
  voiceModal1( v-if="voiceModalFlug1" @closeModal="closeModal1" :voiceItem="voiceList[0]")
  voiceModal2( v-if="voiceModalFlug2" @closeModal="closeModal2" :voiceItem="voiceList[1]")
  voiceModal3( v-if="voiceModalFlug3" @closeModal="closeModal3" :voiceItem="voiceList[2]")
</template>
<script>
import voiceModal1 from "~/components/voiceModal/voiceModal1.vue";
import voiceModal2 from "~/components/voiceModal/voiceModal2.vue";
import voiceModal3 from "~/components/voiceModal/voiceModal3.vue";
export default {
  components: {
    voiceModal1,
    voiceModal2,
    voiceModal3,
  },
  props: {
    voiceList: Array,
  },
  data() {
    return {
      voiceModalFlug1: false,
      voiceModalFlug2: false,
      voiceModalFlug3: false,
      spFlug: '',
      width: '',
    }
  },
  created() {
    // this.handleResize();
  },
  mounted: function () {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      if(this.width >= 600){
        this.spFlug = false;
        return
      }
      this.spFlug = true;
    },
    openModal(index){
      const number = index + 1

      if(!this.spFlug){
        if(number === 1){
          this.voiceModalFlug1 = true;
          return
        }
        if(number === 2){
          this.voiceModalFlug2 = true;
          return
        }
        this.voiceModalFlug3 = true;
        return
      }
      this.$emit('goVoicePage', index)
      return

    },
    closeModal1(){
      this.voiceModalFlug1 = false;
    },
    closeModal2(){
      this.voiceModalFlug2 = false;
    },
    closeModal3(){
      this.voiceModalFlug3 = false;
    },
  }
};
</script>

<style lang="sass">
.voice_items
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1165px)
    display: block
    padding: 0px 15px
  @media (max-width: 375px)
    padding: 0px
  .voice_item
    cursor: pointer;
    position: relative;
    width: 385px;
    height: 295px;
    @media (max-width: 1165px)
      margin: 0 auto
      width: 53.46vw
      height: 40.96vw
      &:nth-child(2)
        margin: 20px auto
    @media (max-width: 600px)
      width: 100%
      height: 53.29vw
    @media (max-width: 375px)
      height: 200px
    &:hover
      opacity: 0.6;
    img
      width: 100%;
      height: 100%;
      object-fit: cover;
    .text_content
      width: calc(100% - 20px);
      position: absolute;
      bottom: 0px;
      left: 0px;
      padding: 20px 0px 18px 20px;
      background-color: rgba(255 , 255 , 255 , 0.8)
      p
        color: #3A3A3A;
      .text_bold
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 4px;
        @media (max-width: 375px)
          font-size: 16px;
      .text_normal
        font-size: 14px;
        padding-bottom: 5px;
        @media (max-width: 375px)
          font-size: 12px;
      .text_min
        font-size: 14px;
        @media (max-width: 375px)
          font-size: 12px;

</style>