import { mount, VueWrapper } from '@vue/test-utils'
import RootComp from './HUButton.vue'
import scenarios from './HUButton.scenarios'

describe('Test Suite for HuButton', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>
  beforeEach(() => wrapper = mount(RootComp, { props: {} }))
  // tests
  it('should display correct button label', async () => {
    const button = wrapper.find('button')
    await wrapper.setProps(scenarios[0])
    expect(button.text()).toEqual(scenarios[0].label)

    await wrapper.setProps(scenarios[1])
    expect(button.text()).toEqual(scenarios[1].label)
  })
  it('should take disabled status based on prop', async () => {
    const button = wrapper.find('button')
    await wrapper.setProps(scenarios[0])
    expect(button.element.disabled).toBe(false)
    expect(button.attributes('tabindex')).toBe('0')
    expect(button.attributes('aria-disabled')).toBe('false')

    await wrapper.setProps(scenarios[1])
    expect(button.element.disabled).toBe(true)
    expect(button.attributes('tabindex')).toBe('-1')
    expect(button.attributes('aria-disabled')).toBe('true')
  })
  it('emits click event', async () => {
    const button = wrapper.find('button')
    await wrapper.setProps(scenarios[0])
    await button.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()

    await wrapper.setProps(scenarios[1])
    expect(wrapper.emitted('click')?.length).toBe(1)
  })
})
