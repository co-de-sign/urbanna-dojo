import React from 'react';
import renderer from 'react-test-renderer';

import BeerBox from '.'

describe('BeerBox', () => {
  let box

  beforeEach(() => {
    const boxData = {
      name: 'Fake name',
      type: ['fake', 'type'],
      alcohol: .5,
    }

    box = renderer.create(<BeerBox data={boxData} />)
  })

  it('renders correctly', () => {
    expect(box).toMatchSnapshot();
  })
})
