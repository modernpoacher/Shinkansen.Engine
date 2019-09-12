import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Motor from 'shinkansen-motor/motor'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-jsonschema-form')

describe('shinkansen-motor/motor', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Motor definition={{}} />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`definition` has `schema` object', () => {
    it('renders', () => {
      const component = (
        <Motor definition={{ schema: {} }} />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`shouldComponentUpdate()`', () => {
    const schema = {}

    let instance

    beforeEach(() => {
      const component = (
        <Motor definition={{ schema }} />
      )

      const wrapper = shallow(component)

      instance = wrapper.instance()
    })

    describe('`props` has changed', () => {
      it('returns true', () => {
        expect(instance.shouldComponentUpdate({ definition: { schema: {} } }))
          .toBe(true)
      })
    })

    describe('`props` has not changed', () => {
      it('returns false', () => {
        expect(instance.shouldComponentUpdate({ definition: { schema } }))
          .toBe(false)
      })
    })
  })
})
