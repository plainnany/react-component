import classnames from '../classnames'

describe('classnames', () => {
  it('接收一个className', () => {
    const result = classnames('icon')
    expect(result).toEqual('icon')
  })

  it('接收一个多个', () => {
    const result = classnames('icon icon2 icon3')
    expect(result).toEqual('icon icon2 icon3')
  })

  it('接收一个包含falsy的字符串', () => {
    const result = classnames('icon', null, 'icon3')
    expect(result).toEqual('icon icon3')
  })

})