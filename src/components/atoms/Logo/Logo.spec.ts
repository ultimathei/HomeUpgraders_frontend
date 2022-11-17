import { mount, VueWrapper } from '@vue/test-utils'
import RootComp from './Logo.vue'
import scenarios from './Logo.scenarios'

describe('Test Suite for Atom/Logo', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>
  beforeEach(() => (wrapper = mount(RootComp, { props: {} })))
  // tests
  it('should render correct data-type for size', async () => {
    await wrapper.setProps(scenarios[0])
    expect(wrapper.attributes('data-size')).toEqual(scenarios[0].size)

    await wrapper.setProps(scenarios[1])
    expect(wrapper.attributes('data-size')).toEqual(scenarios[1].size)
  })
  it('should render aria-label', async () => {
    await wrapper.setProps(scenarios[0])
    expect(wrapper.attributes('aria-label')).toBe('Logo')
  })
  it('should render text based on with-text prop', async () => {
    await wrapper.setProps(scenarios[0])
    let text = wrapper.find('em')
    expect(text.exists()).toBe(true)

    await wrapper.setProps(scenarios[2])
    text = wrapper.find('em')
    expect(text.exists()).toBe(false)
  })
})
