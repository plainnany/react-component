import renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'
import Icon from '../../icon/icon'

describe('icon', () => {
  it('是个icon render successfully', () => {
    const json = renderer.create(<Icon name="wechat" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('触发点击事件', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="wechat" onClick={fn} />) 
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})