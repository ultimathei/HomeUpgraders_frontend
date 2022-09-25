import { mount, VueWrapper } from '@vue/test-utils'
import RootComp from './HUButton.vue'

describe('HelloWorld', () => {
  let wrapper: VueWrapper<any>
  const testProps = {
    label: "Test Label"
  }
  beforeEach(() => {
    wrapper = mount(RootComp, {
      props: testProps,
    })
  })
  // tests
  it('should display button label', () => {
    expect(wrapper.find('button').text()).toEqual(`${testProps.label} - 0`)
  })
})