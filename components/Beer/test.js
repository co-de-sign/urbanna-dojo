import React from 'react'
import Beer from '../Beer'
import renderer from 'react-test-renderer'

describe('Beer', () => {
  let beer

  beforeEach(() => {
    const testData = {
      name: 'test beer',
      alcohol: .3,
      type: ['lager'],
    }

    beer = renderer.create(<Beer beer={testData} />)
  })

  it('renders correctly', () => {
    expect(beer).toMatchSnapshot()
  })
})
