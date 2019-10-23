<template>
  <div class="vue-scroll-root">
    <div class="vue-scroll-outer" ref="out">
      <div class="vue-scroll-inner">
        <slot></slot>
      </div>
    </div>
    <slot name="more">
      <div class="vue-scroll-more-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </slot>
  </div>
</template>

<script>
import "./style/main.less"
import animateScrollTo from 'animated-scroll-to'
export default {
  data() {
    return {

    }
  },
  props: {
    scroll: {
      type: [HTMLElement, Number]
    }
  },
  methods: {
    scrollTo(val){
      animateScrollTo(val, {elementToScroll: this.$refs.out}).then(() => {
        if(!(val instanceof HTMLElement)) return
        let ori = val.style.boxShadow
        val.style.boxShadow = '0 0 0 2px rgba(45,140,240,.3)'
        setTimeout(() => {
          val.style.boxShadow = ori
        }, 1000)
      })
    }
  },
  mounted() {
    this.$on('scroll-left', () => {
      this.scrollTo([this.$refs.out.scrollLeft - this.$refs.out.clientWidth * 0.8, 0])
    })
    this.$on('scroll-right', () => {
      this.scrollTo([this.$refs.out.scrollLeft + this.$refs.out.clientWidth * 0.8, 0])
    })
  },
  watch: {
    scroll: function (newVal) {
      this.scrollTo(newVal)
    }
  },
}
</script>

<style>
</style>
