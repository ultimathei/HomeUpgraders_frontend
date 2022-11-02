import { mount, VueWrapper } from '@vue/test-utils'
import RootComp from './Section.vue'
import scenarios from './Section.scenarios'

describe('Test Suite for Atom/Heading/Section', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>
  beforeEach(() => wrapper = mount(RootComp, { props: {} }))
  // tests
  it('should render correct aria-label', async () => {
    const heading = wrapper.find('h2')
    await wrapper.setProps(scenarios[0])
    expect(heading.text()).toEqual(scenarios[0].text)

    await wrapper.setProps(scenarios[1])
    expect(heading.text()).toEqual(scenarios[1].text)
  })
  it('should take data-attribute based on light prop', async () => {
    const heading = wrapper.find('h2')
    await wrapper.setProps(scenarios[0])
    expect(heading.attributes('data-light')).toBe(undefined)

    await wrapper.setProps(scenarios[1])
    expect(heading.attributes('data-light')).toBe('true')
  })
})
