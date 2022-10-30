import { mount, VueWrapper } from '@vue/test-utils'
import RootComp from './Slider.vue'
import btnComp from '@Atoms/Button/Dot/Dot.vue'
import scenarios from './Slider.scenarios'

describe('Test Suite for Molecule/Control/Slider', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapper: VueWrapper<any> = mount(RootComp,
    {
      props: scenarios[0] || {},
      components: { btnComp },
    }
  )
  // tests
  it('should render correct role', async () => {
    const nav = wrapper.find('nav')
    await wrapper.setProps(scenarios[0])
    expect(nav.attributes('role')).toEqual('navigation')
  })
  it('should render correct aria-label', async () => {
    const nav = wrapper.find('nav')
    await wrapper.setProps(scenarios[0])
    expect(nav.attributes('aria-label')).toEqual('Slider Navigation')

    await wrapper.setProps(scenarios[1])
    expect(nav.attributes('aria-label')).toEqual(`${scenarios[1].label} Navigation`)
  })
  it('inner component should take disabled status based on prop', async () => {
    const button = wrapper.find('button')
    await wrapper.setProps(scenarios[0])
    expect(button.element.disabled).toBe(false)

    await wrapper.setProps(scenarios[2])
    expect(button.attributes('aria-disabled')).toBe('true')
  })
  it('clicking button emits setActive event', async () => {
    await wrapper.setProps(scenarios[0])
    const buttonComp = wrapper.findComponent(btnComp)
    await buttonComp.vm.$emit('click', 1)
    expect(wrapper.emitted('setActive')).toEqual([[1]])
  })
})
