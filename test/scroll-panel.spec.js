import { expect } from 'chai'
import { mount, createLocalVue, render } from '@vue/test-utils'
// import Counter from '../src/Counter.vue'
import scrollPanel from "../src/comp/scroll-panel.vue"

let testComp = {
  name: 'testComp',
  template: "<div id='test-comp'><button v-for='item,index in i' :id='index'>{{ index }}</button></div>",
  data:() => {
    return {
      i: new Array(50)
    }
  }
}

describe('comp/scroll-panel.vue', () => {
  it('render component', () => {
    const wrapper = mount(scrollPanel)
    expect(wrapper.find('div').classes()).contains('vue-scroll-root')
  })

  it('render content', () => {
    const wrapper = mount(scrollPanel, {
      slots: {
        default: testComp
      }
    })
    expect(wrapper.find('#test-comp').findAll('button').length).equal(50)
  })

  it('API test', () => {
    const wrapper = mount(scrollPanel)
    wrapper.setProps({ scroll: document.body })
    // expect(wrapper.find('div').classes()).contains('vue-scroll-root')
  })
})
