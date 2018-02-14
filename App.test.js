import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

describe('App', () => {
  let app

  beforeEach(() => {
    rendered = renderer.create(<App />)
  })

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot()
  })
})
