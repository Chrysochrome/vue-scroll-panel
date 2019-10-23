import panel from './comp/scroll-panel.vue';

let comp = {
  install: (Vue, options) => {
    Vue.component('scroll-panel', panel);
  }
}

export default comp
