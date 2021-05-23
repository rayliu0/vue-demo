import Vue from 'vue'
import TodoItem from '@/components/TodoItem'

describe('TodoItem.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TodoItem)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.view').textContent)
      .to.equal('X')
  })
})
