import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Motor from 'shinkansen-motor/motor'

Enzyme.configure({ adapter: new Adapter() })

describe('shinkansen-motor/motor', () => {
  describe('Always', () => {
    it('renders', () => {
      expect(shallow(<Motor definition={{}} />))
        .toMatchSnapshot()
    })
  })

  describe('`definition` has `schema` object', () => {
    it('renders', () => {
      expect(shallow(<Motor definition={{ schema: {} }} />))
        .toMatchSnapshot()
    })
  })

  describe('`shouldComponentUpdate()`', () => {
    const schema = {}

    let instance

    beforeEach(() => {
      const wrapper = shallow(<Motor definition={{ schema }} />)

      instance = wrapper.instance()
    })

    describe('`props` have changed', () => {
      it('returns true', () => {
        expect(instance.shouldComponentUpdate({ definition: { schema: {} } }))
          .toBe(true)
      })
    })

    describe('`props` have not changed', () => {
      it('returns false', () => {
        expect(instance.shouldComponentUpdate({ definition: { schema } }))
          .toBe(false)
      })
    })
  })
})
