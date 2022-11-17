import { mount, VueWrapper } from '@vue/test-utils'
import RootComp from './Dot.vue'
import scenarios from './Dot.scenarios'

describe('Test Suite for Atom/Button/Dot', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>
  beforeEach(() => (wrapper = mount(RootComp, { props: {} })))
  // tests
  it('should render correct aria-label', async () => {
    const button = wrapper.find('button')
    await wrapper.setProps(scenarios[0])
    expect(button.attributes('aria-label')).toEqual(scenarios[0].label)

    await wrapper.setProps(scenarios[1])
    expect(button.attributes('aria-label')).toEqual(scenarios[1].label)
  })
  it('should take disabled status based on prop', async () => {
    const button = wrapper.find('button')
    await wrapper.setProps(scenarios[0])
    expect(button.element.disabled).toBe(false)
    expect(button.attributes('tabindex')).toBe('0')
    expect(button.attributes('aria-disabled')).toBe(undefined)

    await wrapper.setProps(scenarios[2])
    expect(button.element.disabled).toBe(true)
    expect(button.attributes('tabindex')).toBe('-1')
    expect(button.attributes('aria-disabled')).toBe('true')
  })
  it('should take active status based on prop', async () => {
    const button = wrapper.find('button')
    await wrapper.setProps(scenarios[0])
    expect(button.attributes('aria-current')).toBe(undefined)

    await wrapper.setProps(scenarios[1])
    expect(button.attributes('aria-current')).toBe('true')
  })
  it('emits click event', async () => {
    const button = wrapper.find('button')
    await wrapper.setProps(scenarios[0])
    await button.trigger('click')
    expect(wrapper.emitted('click')?.length).toBe(1)

    await wrapper.setProps(scenarios[2])
    // count should have not increased
    expect(wrapper.emitted('click')?.length).toBe(1)
  })
})
